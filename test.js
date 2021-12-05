var db = require('./database.js')
var md5 = require('md5')

const all = db.prepare('SELECT * FROM userinfo').all();

function updateall() {
    all = db.prepare('SELECT * FROM userinfo').all();
}

console.log("\nAll records in database:", db.name);
console.log(all)

const getuser = db.prepare('SELECT * FROM userinfo WHERE id = ?');
const output = getuser.get('1')
console.log("\nFull record for username", output.user)
console.log(output)