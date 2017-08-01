const commands = require('./commands');

// Output a prompt
process.stdout.write('\nprompt > ');

process.stdin.on('data', function(data){
    //var cmd = data.toString().trim(); // remove the newline

    const tokens = data.toString().trim().split(' ');
    const cmd = tokens[0];
    const args = tokens.slice(1).join(' ');

    if (commands[cmd]) commands[cmd](args);
    else if(commands[cmd]) commands[cmd](args);
    else process.stderr.write('command not found: ' + cmd);

    // process.stdout.write('\nprompt > ');

});

