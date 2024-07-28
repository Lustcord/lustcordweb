const sharp = require('sharp');
const {glob} = require('glob');
const fs = require('fs');
const path = require('path');

const convertToWebp = async (filePath) => {
    const outputFilePath = filePath.replace(/\.(png|jpeg|jpg)$/i, '.webp');
    try {
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(outputFilePath);
      console.log(`Converted: ${filePath} -> ${outputFilePath}`);
      fs.unlinkSync(filePath)
    } catch (err) {
      console.error(`Error converting ${filePath}:`, err);
    }
  };

const convertImages = async () => {
    console.log('Starting image conversion...');
    const files = await glob('public/assets/**/*.{png,jpeg,jpg}')
    console.log(files);
    files.forEach(file => convertToWebp(file));
};

convertImages();