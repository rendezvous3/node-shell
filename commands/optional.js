'use strict';

const fs = require('fs');
const request = require('request');

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
            }
        });
    });
}

function head (filename, done) {
    fs.readFile(filename, { encoding: 'utf8' }, function (err, text) {
        if (err) throw err;
        done(text.split("\n").slice(0,5).join('\n'));
    })
}

function tail (filename, done) {
    fs.readFile(filename, { encoding: 'utf8' }, function(err, text){
        if (err) throw err;
        done(text.split('\n').slice(-5).join('\n'));
    })
}

function sort (filename, done) {
    fs.readFile(filename, { encoding: 'utf8' }, function(err, text){
        if (err) throw err;
        done(text.split('\n').sort().join('\n'));
    })
}

function wc (filename, done) {
    fs.readFile(filename, { encoding: 'utf8' }, function(err, text){
        if (err) throw err;
        done(text.split('\n').length);
    })
}

function uniq (filename, done) {
    fs.readFile(filename, { encoding: 'utf8' }, function(err, text){
        if (err) throw err;
        const lines = text.split('\n');
        for(var i=0; i < lines.length; i++) {
            if(lines[i] === lines[i+1]) {
                lines.splice(i, 1);
                i--;
            }
        }
        done(lines.join('\n'));
    })
}

function curl(url, done) {
    if (url.slice(0, 7) !== 'http://') url = 'http://' + url;
    request(url, function(err, response, body){
        if(err) throw err;
        else if (response && (response.statusCode > 399)) throw new Error(response.statusCode);
        if(body) done(body);
        else done('');
   })
}


module.exports = {
    cat:cat,
    head: head,
    tail: tail,
    sort: sort,
    wc: wc,
    uniq: uniq,
    curl: curl
}