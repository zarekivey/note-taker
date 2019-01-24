console.log('starting app.js');

const fs = require('fs');
const notes = require('./notes.js');

const _ = require('lodash');

let command = process.argv[2];
console.log('command', command);
console.log(process.argv);
// From the terminal
if (command === 'add') {
    console.log('Adding new note')
} else if (command === 'list') {
    console.log('Listing all notes')
} else if (command === 'remove') {
    console.log('Removing note')
} else if (command === 'read') {
    console.log('Reading note')
} else {
    console.log('Command not recognized')
}