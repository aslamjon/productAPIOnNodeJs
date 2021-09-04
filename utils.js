const fs = require('fs');

function writeData(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content, null, 2), 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
    })
}

module.exports = {
    writeData
}