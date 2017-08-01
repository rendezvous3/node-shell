'use strict';

const chalk = require('chalk');
const fs = require('fs');
const prompt = chalk.blue('\nprompt > ');

function cat(filenames, done) {
    filenames = filenames.split(' ');
    const texts = [];
    var count = 0;
    filenames.forEach(function(filename, i) {
        fs.readFile(filename, {encoding: 'utf8'}, function (err, text){
            if(err) throw err;
            texts[i] = text;
            count++;
            if(count === filenames.length) {
                done(texts.join(''));
                //process.stdout.write(texts.join(''));
                //process.stdout.write(prompt);
                //process.stdout.write('/nprompt > ')
            }
        });
    });
}

function head (filename, done) {
    fs.readFile(filename, { encoding: 'utf8' }, function (err, text) {
        if (err) throw err;
        done(text.split("\n").slice(0,5).join('\n'));
        //process.stdout.write(text.split("\n").slice(0,5).join('\n'));
        //process.stdout.write(prompt);
        //process.stdout.write('/nprompt > ');
    })
}

function tail (filename, done) {
    fs.readFile(filename, { encoding: 'utf8' }, function(err, text){
        if (err) throw err;
        done(text.split('\n').slice(-5).join('\n'));
        //process.stdout.write(text.split('\n').slice(-5).join('\n'));
        //process.stdout.write(prompt);
        //process.stdout.write('/nprompt > ');
    })
}

function sort(filename, done) {
    fs.readFile()
}


module.exports = {
    cat:cat,
    head: head,
    tail: tail
}