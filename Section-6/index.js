const fs = require('fs');

// const students = {
//     name:"Nobita",
//     age:17,
//     sub:"Science",
//     work:"Test",
// }

// const stdJson = JSON.stringify(students)
// fs.writeFileSync("Create.json",stdJson)






//---------- Challenge--------------------------------
const dataR = fs.readFileSync("data.json")
const dataS = dataR.toString();
const dataP = JSON.parse(dataS);
dataP.name ="And"
dataP.planet="mars"
const dataStr = JSON.stringify(dataP);
fs.writeFileSync("data.json",dataStr)