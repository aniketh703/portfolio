import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminOptipng from 'imagemin-optipng';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../public/projects');

async function compressImages() {
  console.log('🖼️ Compressing Gita images (PNG → WebP + optimized PNG)...');

  try {
    // Convert PNGs to WebP
    await imagemin([`${publicDir}/gita*.png`], {
      destination: publicDir,
      plugins: [
        imageminWebp({
          quality: 75,
          alphaQuality: 75,
        }),
      ],
    });

    // Optimize existing PNGs
    await imagemin([`${publicDir}/gita*.png`], {
      destination: publicDir,
      plugins: [
        imageminOptipng({
          optimizationLevel: 3,
        }),
      ],
    });

    console.log('✅ Image compression complete!');
  } catch (error) {
    console.error('❌ Compression failed:', error);
    process.exit(1);
  }
}

compressImages();
