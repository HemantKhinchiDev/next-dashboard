const fs = require('fs');
const path = require('path');
const https = require('https');

const imageUrls = [
    "https://www.radiustheme.com/demo/wordpress/themes/blusho/wp-content/uploads/2022/10/product_02-450x450.jpg",
    "https://www.radiustheme.com/demo/wordpress/themes/blusho/wp-content/uploads/2022/10/product_13-450x450.jpg",
    "https://www.radiustheme.com/demo/wordpress/themes/blusho/wp-content/uploads/2022/10/product_07-450x450.jpg",
    "https://www.radiustheme.com/demo/wordpress/themes/blusho/wp-content/uploads/2022/10/product_08-450x450.jpg",
    "https://www.radiustheme.com/demo/wordpress/themes/blusho/wp-content/uploads/2022/10/product_03-450x450.jpg",
    "https://www.radiustheme.com/demo/wordpress/themes/blusho/wp-content/uploads/2022/10/product_04-450x450.jpg",
    "https://www.radiustheme.com/demo/wordpress/themes/blusho/wp-content/uploads/2022/10/product_05-450x450.jpg",
    "https://www.radiustheme.com/demo/wordpress/themes/blusho/wp-content/uploads/2022/10/product_10-450x450.jpg"
];

const downloadImage = (url, filename) => {
    const file = fs.createWriteStream(path.join(__dirname, 'public/images/products', filename));
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${filename}`);
        });
    }).on('error', (err) => {
        fs.unlink(filename);
        console.error(`Error downloading ${filename}: ${err.message}`);
    });
};

imageUrls.forEach(url => {
    const filename = url.split('/').pop();
    downloadImage(url, filename);
});
