const fs = require('fs');
const path = require('path');

const products = [
    "product_02-450x450.jpg",
    "product_13-450x450.jpg",
    "product_07-450x450.jpg",
    "product_08-450x450.jpg",
    "product_03-450x450.jpg",
    "product_04-450x450.jpg",
    "product_05-450x450.jpg",
    "product_10-450x450.jpg"
];

const generateSVG = (filename) => {
    const text = filename.split('-')[0].replace('product_', 'Product ');
    const svgContent = `
<svg width="450" height="450" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f3f4f6"/>
  <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#9ca3af" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>`;

    // Save as .jpg even though it's SVG content? Next.js might complain.
    // Better to save as .svg and update paths, OR use a library to create real JPGs.
    // BUT we don't have canvas/jpeg libraries installed guaranteed.
    // Let's UPDATE the file extensions in the code to .svg?
    // OR just try to download valid public placeholder images from placehold.co?
    // Let's try downloading from placehold.co. It's reliable.

    return `https://placehold.co/450x450/e2e8f0/1e293b.jpg?text=${encodeURIComponent(text)}`;
};

const https = require('https');

const downloadPlaceholder = (url, filename) => {
    const file = fs.createWriteStream(path.join(__dirname, 'public/images/products', filename));
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Generated placeholder for ${filename}`);
        });
    });
}

products.forEach(filename => {
    const url = generateSVG(filename);
    downloadPlaceholder(url, filename);
});
