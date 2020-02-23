const csvjson = require('csvjson');
const readFile = require('fs').readFile;

readFile('./timetable_school.csv', 'utf-8', (err, fileContent) => {
    if(err) {
        console.log(err); // Do something to handle the error or just throw it
        throw new Error(err);
    }
    const jsonObj = csvjson.toObject(fileContent);
    console.log(jsonObj);
});