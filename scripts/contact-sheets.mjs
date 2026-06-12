// Build labeled contact sheets from candidate images for visual review.
// Usage: node scripts/contact-sheets.mjs
import sharp from 'sharp';
import { readdir, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const NEW_DIR = 'whatsapp images 12062026';
const OLD_DIR = 'public/images/gallery';
const OUT_DIR = 'contact-sheets';
const COLS = 4;
const ROWS = 4;
const THUMB_W = 300;
const THUMB_H = 225;
const LABEL_H = 26;
const CELL_W = THUMB_W;
const CELL_H = THUMB_H + LABEL_H;

const exts = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function listImages(dir, prefix) {
  const files = (await readdir(dir)).filter((f) => exts.has(path.extname(f).toLowerCase())).sort();
  return files.map((f, i) => ({ id: `${prefix}${String(i + 1).padStart(3, '0')}`, file: path.join(dir, f), name: f }));
}

const candidates = [
  ...(await listImages(NEW_DIR, 'N')),
  ...(await listImages(OLD_DIR, 'G')),
];

await mkdir(OUT_DIR, { recursive: true });

// Write an index mapping id -> filename + dimensions
const index = [];
for (const c of candidates) {
  try {
    const meta = await sharp(c.file).metadata();
    index.push({ id: c.id, name: c.name, w: meta.width, h: meta.height });
  } catch (e) {
    index.push({ id: c.id, name: c.name, error: String(e) });
  }
}
await writeFile(path.join(OUT_DIR, 'index.json'), JSON.stringify(index, null, 2));

const perSheet = COLS * ROWS;
const sheets = Math.ceil(candidates.length / perSheet);

for (let s = 0; s < sheets; s++) {
  const batch = candidates.slice(s * perSheet, (s + 1) * perSheet);
  const composites = [];
  for (let i = 0; i < batch.length; i++) {
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    const x = col * CELL_W;
    const y = row * CELL_H;
    let thumb;
    try {
      thumb = await sharp(batch[i].file)
        .rotate() // respect EXIF orientation
        .resize(THUMB_W, THUMB_H, { fit: 'cover' })
        .jpeg({ quality: 80 })
        .toBuffer();
    } catch {
      thumb = await sharp({ create: { width: THUMB_W, height: THUMB_H, channels: 3, background: { r: 200, g: 50, b: 50 } } }).jpeg().toBuffer();
    }
    composites.push({ input: thumb, left: x, top: y });
    const label = Buffer.from(
      `<svg width="${CELL_W}" height="${LABEL_H}"><rect width="100%" height="100%" fill="#111"/><text x="6" y="18" font-family="Arial" font-size="15" fill="#fff">${batch[i].id}</text></svg>`
    );
    composites.push({ input: label, left: x, top: y + THUMB_H });
  }
  const sheetH = Math.ceil(batch.length / COLS) * CELL_H;
  await sharp({ create: { width: COLS * CELL_W, height: sheetH, channels: 3, background: { r: 255, g: 255, b: 255 } } })
    .composite(composites)
    .jpeg({ quality: 82 })
    .toFile(path.join(OUT_DIR, `sheet-${String(s + 1).padStart(2, '0')}.jpg`));
  console.log(`sheet-${String(s + 1).padStart(2, '0')}.jpg: ${batch[0].id}..${batch[batch.length - 1].id}`);
}
console.log(`Done. ${candidates.length} images across ${sheets} sheets.`);
