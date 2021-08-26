const fs = require('fs');

function writeData(res,data, messagee, errorMessage) {
    fs.writeFile('data/data.json', JSON.stringify(data, null, 2), 'utf-8', (err) => {
        if (err) {
            console.log(err);
            res.send({
                message: errorMessage
            })
        } else {
            res.status(201).send({
                message: messagee
            })
        }
    })
}

module.exports = {
    writeData
}