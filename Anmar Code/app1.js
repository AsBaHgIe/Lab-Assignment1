const fs = require('fs');

fs.readFile('Intro.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:');
    console.log(data);
});