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
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    };

    https.get(url, options, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
            console.log(`Redirecting ${filename} to ${response.headers.location}`);
            downloadImage(response.headers.location, filename);
            return;
        }

        if (response.statusCode !== 200) {
            console.error(`Failed to download ${filename}: Status Code ${response.statusCode}`);
            return;
        }

        const file = fs.createWriteStream(path.join(__dirname, 'public/images/products', filename));
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`successfully downloaded ${filename}, size: ${response.headers['content-length']} bytes`);
        });
    }).on('error', (err) => {
        console.error(`Error downloading ${filename}: ${err.message}`);
    });
};

console.log("Starting download...");
imageUrls.forEach(url => {
    const filename = url.split('/').pop();
    downloadImage(url, filename);
});
