// Bigger review sheets for shortlisted images.
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const idx = JSON.parse(await readFile('contact-sheets/index.json', 'utf8'));
const byId = Object.fromEntries(idx.map((e) => [e.id, e.name]));

const FINALISTS = [
  'N001','N004','N007','N009','N010','N013','N014','N015','N020','N021','N023','N024',
  'N027','N031','N033','N034','N036','N043','N046','N049','N050','N054','N055','N056',
  'N061','N065','N069','N070','N072','N080','N093','N097','N100','N103','N106','N112',
  'N113','N114','N121','N127','N128','N129','N130','N132','N133','N136','N138','N140',
  'N141','N143','N144','N145','N146','N147','N148','N159','N167','N168','X166',
  'G005','G011','G012',
];

function fileFor(id) {
  if (id === 'X166') return 'contact-sheets/IMG_6031_converted.jpg';
  if (id.startsWith('G')) return path.join('public/images/gallery', byId[id]);
  return path.join('whatsapp images 12062026', byId[id]);
}

const COLS = 3, TW = 440, TH = 330, LH = 28;
const CW = TW, CH = TH + LH;
const perSheet = 12;
const sheets = Math.ceil(FINALISTS.length / perSheet);

for (let s = 0; s < sheets; s++) {
  const batch = FINALISTS.slice(s * perSheet, (s + 1) * perSheet);
  const comps = [];
  for (let i = 0; i < batch.length; i++) {
    const x = (i % COLS) * CW, y = Math.floor(i / COLS) * CH;
    const thumb = await sharp(fileFor(batch[i])).rotate().resize(TW, TH, { fit: 'cover' }).jpeg({ quality: 85 }).toBuffer();
    comps.push({ input: thumb, left: x, top: y });
    comps.push({
      input: Buffer.from(`<svg width="${CW}" height="${LH}"><rect width="100%" height="100%" fill="#111"/><text x="6" y="20" font-family="Arial" font-size="16" fill="#fff">${batch[i]}</text></svg>`),
      left: x, top: y + TH,
    });
  }
  const h = Math.ceil(batch.length / COLS) * CH;
  await sharp({ create: { width: COLS * CW, height: h, channels: 3, background: { r: 255, g: 255, b: 255 } } })
    .composite(comps).jpeg({ quality: 85 }).toFile(`contact-sheets/final-${s + 1}.jpg`);
  console.log(`final-${s + 1}.jpg: ${batch.join(' ')}`);
}
