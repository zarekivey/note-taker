console.log('starting app.js');

const fs = require('fs');
const notes = require('./notes.js');
const yargs = require('yargs'); // Yargs is good for parsing through argv arguments, title, object

const _ = require('lodash');

const argv = yargs.argv;
let command = argv._[0];
console.log('command', command);
console.log('Yargs', argv);


// From the terminal
if (command === 'add') { 
    notes.addNote(argv.title, argv.body)
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else if (command === 'read') {
    notes.getNote(argv.title);
} else {
    console.log('Command not recognized')
}