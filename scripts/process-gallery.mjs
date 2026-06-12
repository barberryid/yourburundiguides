// Process the selected 50 gallery images (plus one extra for things-to-do)
// into public/images/gallery with descriptive names, web-sized.
import sharp from 'sharp';
import { readFile, unlink, copyFile } from 'node:fs/promises';
import path from 'node:path';

const idx = JSON.parse(await readFile('contact-sheets/index.json', 'utf8'));
const byId = Object.fromEntries(idx.map((e) => [e.id, e.name]));

const NEW_DIR = 'whatsapp images 12062026';
const OLD_DIR = 'public/images/gallery';
const OUT_DIR = 'public/images/gallery';

// [id, outputName] — order matters: this is the gallery display order.
const SELECTION = [
  ['N145', 'burundi-royal-drummers-parade.jpg'],
  ['N141', 'burundi-tea-plantation-hills.jpg'],
  ['N050', 'lake-tanganyika-fishermen.jpg'],
  ['N033', 'mountain-gorilla-mother-baby.jpg'],
  ['N056', 'traditional-dancers-sunset.jpg'],
  ['N027', 'elephant-crossing-safari-road.jpg'],
  ['N132', 'waterfall-rainbow-burundi.jpg'],
  ['N007', 'gishora-drummers-visitor.jpg'],
  ['N065', 'boat-trip-water-lilies.jpg'],
  ['N103', 'rhino-and-calf-savanna.jpg'],
  ['N113', 'bujumbura-viewpoint-group.jpg'],
  ['N010', 'tea-fields-burundi.jpg'],
  ['N049', 'lake-tanganyika-sunset.jpg'],
  ['N121', 'drummers-performance-guest.jpg'],
  ['N143', 'source-of-the-nile-pyramid.jpg'],
  ['N014', 'hippo-pool-safari.jpg'],
  ['N127', 'traditional-dance-procession.jpg'],
  ['N167', 'misty-mountain-gorge.jpg'],
  ['N034', 'mountain-gorilla-closeup.jpg'],
  ['N055', 'burundi-drummers-flag.jpg'],
  ['N072', 'canoe-paddling-lake.jpg'],
  ['N013', 'giraffe-acacia-safari.jpg'],
  ['G011', 'tea-fields-walk.jpg'],
  ['N114', 'village-visit-children.jpg'],
  ['N100', 'white-rhino-dusk.jpg'],
  ['N004', 'rainforest-canopy-bridge.jpg'],
  ['N043', 'wetland-water-lilies.jpg'],
  ['G012', 'gishora-drummers-ceremony.jpg'],
  ['N020', 'buffalo-golden-savanna.jpg'],
  ['N138', 'waterfall-pool-burundi.jpg'],
  ['N036', 'mountain-gorilla-feeding.jpg'],
  ['N070', 'tea-plantation-visit.jpg'],
  ['N054', 'egrets-sunset-palms.jpg'],
  ['N015', 'white-rhinos-group.jpg'],
  ['N093', 'traditional-royal-hut.jpg'],
  ['N140', 'hilltop-jump-bujumbura.jpg'],
  ['N021', 'ground-hornbill-bird.jpg'],
  ['N130', 'suspension-bridge-family.jpg'],
  ['N159', 'gorilla-mother-infant.jpg'],
  ['N144', 'tea-plantation-path.jpg'],
  ['N106', 'rhinos-waterhole-reflection.jpg'],
  ['N001', 'guided-countryside-walk.jpg'],
  ['N147', 'sacred-drums-sanctuary.jpg'],
  ['N069', 'birds-wetland-palms.jpg'],
  ['N148', 'silverback-gorilla.jpg'],
  ['N112', 'guests-guide-bujumbura.jpg'],
  ['N023', 'rhino-trek-guest.jpg'],
  ['N136', 'pineapple-farm-visit.jpg'],
  ['G005', 'canyon-viewpoint-burundi.jpg'],
  ['N168', 'young-mountain-gorilla.jpg'],
  // Extra (not in the 50-photo gallery): used on the things-to-do page.
  ['N080', 'bujumbura-market-pineapples.jpg'],
];

if (new Set(SELECTION.map((s) => s[1])).size !== SELECTION.length) {
  throw new Error('Duplicate output names');
}
console.log(`Selected: ${SELECTION.length - 1} gallery + 1 extra`);

function srcFor(id) {
  const name = byId[id];
  if (!name) throw new Error(`Unknown id ${id}`);
  return id.startsWith('G') ? path.join(OLD_DIR, name) : path.join(NEW_DIR, name);
}

// Stage old-gallery sources to temp buffers first, since we delete those files after.
for (const [id, out] of SELECTION) {
  const buf = await readFile(srcFor(id));
  const img = sharp(buf).rotate().resize(1280, 1280, { fit: 'inside', withoutEnlargement: true });
  await img.jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(OUT_DIR, out));
}

// Remove the old gallery files.
for (let i = 1; i <= 12; i++) {
  const f = path.join(OLD_DIR, `gallery-${String(i).padStart(2, '0')}.jpg`);
  await unlink(f).catch(() => {});
}

console.log('Done.');
