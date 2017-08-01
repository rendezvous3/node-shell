'use strict';

const fs = require('fs');

function cat(filenames) {
    filenames = filenames.split(' ');
    const texts = [];
    var count = 0;
    filenames.forEach(function(filename, i) {
        fs.readFile(filename, {encoding: 'utf8'}, function (err, text){
            if(err) throw err;
            texts[i] = text;
            count++;
            if(count === filenames.length) {
                process.stdout.write(texts.join(''));
                process.stdout.write('/nprompt > ')
            }
        });
    });
}


module.exports = {
    cat:cat,
}