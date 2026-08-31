// One-off asset pipeline for the /kariera timeline page.
//
// Turns curated renders from Lenka's academic architecture portfolio (the
// boards pasted into GitHub issue #4) into optimized, auto-corrected
// photos. For each entry below it downloads the original board from its
// GitHub attachment URL, crops it down to just the rendered visualization
// (dropping title text, logos and credit strips — the crop rectangles were
// picked by hand by inspecting each board), then auto-corrects levels,
// lifts brightness/saturation slightly and sharpens so the render reads
// more like a photograph, and writes an optimized JPEG into
// public/images/kariera/<slug>/<slug>-<n>.jpg.
//
// Usage: npm run images:process
//
// Re-run whenever a source board or crop rectangle changes; output is
// deterministic and safe to commit.

import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputRoot = path.join(__dirname, "..", "public", "images", "kariera");

/**
 * `crop` is a rectangle expressed as fractions (0–1) of the source image's
 * width/height, so it stays correct regardless of the export resolution
 * GitHub happens to have generated for that particular board.
 */
const IMAGES = [
  {
    slug: "bytovy-dum-slavojova",
    n: 1,
    sourceUrl: "https://github.com/user-attachments/assets/326e1799-21b3-46c8-b15e-edc200d2d878",
    crop: { left: 0, top: 0, width: 0.87, height: 0.37 },
  },
  {
    slug: "bytovy-dum-slavojova",
    n: 2,
    sourceUrl: "https://github.com/user-attachments/assets/a2c5665b-b562-4a60-a947-93e9fe70fedf",
    crop: { left: 0, top: 0, width: 0.87, height: 0.4 },
  },
  {
    slug: "golfovy-klub-benatky",
    n: 1,
    sourceUrl: "https://github.com/user-attachments/assets/203475e8-a5b9-4879-a00d-cfc5aafb8147",
    crop: { left: 0, top: 0, width: 1, height: 0.27 },
  },
  {
    slug: "dum-na-vode",
    n: 1,
    sourceUrl: "https://github.com/user-attachments/assets/b6b59083-967d-4062-ac3e-8665b135e41d",
    crop: { left: 0, top: 0, width: 0.42, height: 0.225 },
  },
  {
    slug: "galerie-martinsky-vrch",
    n: 1,
    sourceUrl: "https://github.com/user-attachments/assets/285ad5e4-800b-4d09-a7e3-7ffc464f5ad6",
    crop: { left: 0.12, top: 0.145, width: 0.78, height: 0.72 },
  },
  {
    slug: "galerie-martinsky-vrch",
    n: 2,
    sourceUrl: "https://github.com/user-attachments/assets/ada6ca71-d702-4958-b2c3-14a6982011b6",
    crop: { left: 0.12, top: 0.145, width: 0.78, height: 0.72 },
  },
];

async function downloadImage(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: HTTP ${response.status}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

async function processImage({ slug, n, sourceUrl, crop }) {
  const buffer = await downloadImage(sourceUrl);
  const { width, height } = await sharp(buffer).metadata();

  const region = {
    left: Math.round(crop.left * width),
    top: Math.round(crop.top * height),
    width: Math.round(crop.width * width),
    height: Math.round(crop.height * height),
  };

  const outDir = path.join(outputRoot, slug);
  await mkdir(outDir, { recursive: true });
  const outFile = path.join(outDir, `${slug}-${n}.jpg`);

  await sharp(buffer)
    .extract(region)
    .normalize() // auto levels/contrast
    .modulate({ brightness: 1.03, saturation: 1.1 }) // subtle, photo-like lift
    .sharpen()
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(outFile);

  console.log(`Wrote ${path.relative(path.join(__dirname, ".."), outFile)}`);
}

for (const image of IMAGES) {
  await processImage(image);
}

console.log(`Done — processed ${IMAGES.length} images.`);
