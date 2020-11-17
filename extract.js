var path = require('path');

var extractFilePath = function (url, fileName="index.html") {
    var filePath;

    if (url.length > 1) {
        fileName = url.substring(1);
    }

    console.log('The fileName is: ' + fileName);
    filePath = path.resolve(__dirname, 'app', fileName);
    return filePath;
};

module.exports = extractFilePath;