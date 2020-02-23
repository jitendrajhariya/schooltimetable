const csvjson = require('csvjson');
const createReadStream = require('fs').createReadStream;
const createWriteStream = require('fs').createWriteStream;

const stringify = csvjson.stream.stringify();
const toObject = csvjson.stream.toObject();

createReadStream('./timetable_school.csv', 'utf-8')
    .pipe(toObject)
    .pipe(stringify)
    .pipe(createWriteStream('./test-data-output-stream.json'));