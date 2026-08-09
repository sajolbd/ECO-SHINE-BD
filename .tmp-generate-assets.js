const fs = require("fs");
const sharp = require("sharp");

(async () => {
  const logo = "public/images/logo.png";
  const hero = "public/images/home/hero/hero-bg.png";

  const favicon32 = await sharp(logo)
    .resize(32, 32, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp(logo)
    .resize(96, 96, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile("public/favicon.png");

  await sharp(logo)
    .resize(180, 180, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile("public/apple-icon.png");

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0);
  entry.writeUInt8(32, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(favicon32.length, 8);
  entry.writeUInt32LE(22, 12);
  fs.writeFileSync("public/favicon.ico", Buffer.concat([header, entry, favicon32]));

  const logoOg = await sharp(logo)
    .resize(470, 240, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();

  const overlay = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="rgba(0,0,0,0.46)"/>
      <rect x="72" y="76" width="1056" height="478" fill="rgba(255,255,255,0.90)"/>
      <text x="600" y="394" text-anchor="middle" font-family="Arial, sans-serif" font-size="44" font-weight="700" fill="#111827">UA Engineering PTE. LTD.</text>
      <text x="600" y="452" text-anchor="middle" font-family="Arial, sans-serif" font-size="27" font-weight="500" fill="#334155">Professional Renovation &amp; Engineering Services Across Singapore</text>
    </svg>
  `);

  await sharp(hero)
    .resize(1200, 630, { fit: "cover" })
    .composite([
      { input: overlay, left: 0, top: 0 },
      { input: logoOg, left: 365, top: 132 },
    ])
    .jpeg({ quality: 72, progressive: true, mozjpeg: true })
    .toFile("public/og-image.jpg");
})();
