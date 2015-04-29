var fs = require('fs')
//var weapons = require('./weapons')

//insert into weapons values ("Barbed Dagger", "2d4", "Piercing", 10, 1, "Light, Finesse, Thrown (20/60)", True);

var data = JSON.parse(fs.readFileSync('json/simpleMeleeWeapons.json', 'utf8'))
var output = ""
data.forEach(function(weapon) {
	output += "insert into weapons values (\"" + weapon.Name + "\", " + "\"" + weapon.Damage + "\", " + "\"" + weapon.Damagetype + "\"" + weapon.Cost + "\", " + "\"" + weapon.Weight + "\", " + "\"" + weapon.Cost + "\", " + ")\n";
})

console.log(output)