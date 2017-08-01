const chalk = require('chalk');
const commands = require('./commands');

const prompt = chalk.blue('\nprompt > ');
// Output a prompt
//const prompt = process.stdout.write('\nprompt > ');
process.stdout.write(prompt);

process.stdin.on('data', function(data){
    //var cmd = data.toString().trim(); // remove the newline

    const tokens = data.toString().trim().split(' ');
    const cmd = tokens[0];
    const args = tokens.slice(1).join(' ');

    if (commands[cmd]) commands[cmd](args, done);
    else if(commands[cmd]) commands[cmd](args, done);
    else process.stderr.write('command not found: ' + cmd);
    // process.stdout.write('\nprompt > ');
});

function done (output) {
    process.stdout.write(output +  prompt);
}

