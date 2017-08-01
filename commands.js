function pwd() {
    process.stdout.write(process.env.PWD);
}

function date() {
    process.stdout.write(Date());
}


let obj = {
    pwd: pwd,
    date: date
}

module.exports = obj;