// Run with Sharp installed in %LOCALAPPDATA%/ResetsSiteTools.
// Only orientation, responsive sizing and encoding; photographic content is preserved.
const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require(path.join(process.env.LOCALAPPDATA, 'ResetsSiteTools/node_modules/sharp'));
const photos = [
  [8014, 'treatment-care'], [8015, 'treatment-movement'],
  [8016, 'voice-my-pace'], [8017, 'voice-enjoy'], [8018, 'voice-goals'],
  [8019, 'voice-first-training'], [8020, 'voice-flexibility'],
  [8021, 'voice-whole-body'], [8022, 'voice-learning'], [8023, 'voice-light-load'],
];
(async () => {
  const output = path.join(__dirname, '../images/photos');
  await fs.mkdir(output, { recursive: true });
  const manifest = [];
  for (const [id, name] of photos) {
    const source = path.join(process.env.USERPROFILE, `Downloads/IMG_${id}.JPG`);
    const meta = await sharp(source).metadata();
    const files = [];
    for (const width of [640, 1280]) {
      const file = `${name}-${width}.webp`;
      const result = await sharp(source).rotate().resize({ width, withoutEnlargement: true })
        .webp({ quality: 88, effort: 6 }).toFile(path.join(output, file));
      files.push({ file, width: result.width, height: result.height, bytes: result.size });
    }
    manifest.push({ source: `IMG_${id}.JPG`, width: meta.width, height: meta.height, files });
  }
  await fs.writeFile(path.join(output, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  console.log(JSON.stringify(manifest, null, 2));
})();
