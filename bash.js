// Output a prompt
process.stdout.write('prompt > ');

process.stdin.on('data', function(data){
    var cmd = data.toString().trim(); // remove the newline
    // console.log(data);
    // displays binary data
    if (cmd === 'pwd') {
        process.stdout.write(process.env.PWD);
    }

    if(cmd === 'date') {
        // var currentTime = new Date();
        // process.stdout.write(currentTime.toString());
        process.stdout.write(Date());
    }
    
    process.stdout.write('\nprompt > ');

});

