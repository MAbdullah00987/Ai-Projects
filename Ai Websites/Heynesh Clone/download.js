const fs = require('fs');
const https = require('https');

https.get('https://heynesh.com/', (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        fs.writeFileSync('index.html', data);
        console.log('Downloaded index.html');
    });
}).on('error', (err) => {
    console.error('Error:', err.message);
});
