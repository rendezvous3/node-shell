'use strict';

const fs = require('fs');

function pwd(args, done) {
    done(process.env.PWD);
    // process.stdout.write(process.env.PWD);
    // process.stdout.write('\nprompt > ');
}

function date(args, done) {
    done(Date());
    // process.stdout.write(Date());
    // process.stdout.write('\nprompt > ');
}

function ls(args, done) {
    fs.readdir('.', function(err, filenames){
        if(err) throw err;
        done(filenames.join('\n'));
        // process.stdout.write(filenames.join('\n'));
        // process.stdout.write('\nprompt > ');
    })
}

function echo (args, done) {
    const output = args
    .split(' ')
    .map(function (arg) {
        return (arg[0] === '$') ? process.env[arg.slice(1)] : arg;
    }).join(' ');

    done(output);
    // process.stdout.write(output);
    // process.stdout.write('\nprompt > ');

}


let obj = {
    pwd: pwd,
    date: date,
    ls: ls,
    echo: echo
}

module.exports = obj;