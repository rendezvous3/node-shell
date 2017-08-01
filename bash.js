const commands = require('./commands');
// Output a prompt
process.stdout.write('prompt > ');

process.stdin.on('data', function(data){
    var cmd = data.toString().trim(); // remove the newline
    // console.log(data);
    // displays binary data
    if (commands[cmd]) commands[cmd]();
    else if(commands[cmd]) commands[cmd]();
    else process.stderr.write('command not found: ' + cmd);

    process.stdout.write('\nprompt > ');

});

