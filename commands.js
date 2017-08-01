'use strict';

const fs = require('fs');

function pwd(args) {
    process.stdout.write(process.env.PWD);
    process.stdout.write('\nprompt > ');
}

function date(args) {
    process.stdout.write(Date());
    process.stdout.write('\nprompt > ');
}

function ls(args) {
    fs.readdir('.', function(err, filenames){
        if(err) throw err;
        process.stdout.write(filenames.join('\n'));
        process.stdout.write('\nprompt > ');
        // filenames.forEach(function(filename){
        //     process.stdout.write(filename + "\n");
        // });
    })
}

function echo (args) {
    const output = args
    .split(' ')
    .map(function (arg) {
        return (arg[0] === '$') ? process.env[arg.slice(1)] : arg;
    }).join(' ');

    process.stdout.write(output);
    process.stdout.write('\nprompt > ');

}


let obj = {
    pwd: pwd,
    date: date,
    ls: ls,
    echo: echo
}

module.exports = obj;