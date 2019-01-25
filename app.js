console.log('starting app.js');

const fs = require('fs');
const notes = require('./notes.js');
const yargs = require('yargs'); // Yargs is good for parsing through argv arguments, title, object

const _ = require('lodash');

const argv = yargs.argv;
let command = argv._[0]; // fetching the command
console.log('command', command);
console.log('Yargs', argv);


// Parsing data from the terminal
if (command === 'add') { 
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created')
        console.log('--')
        console.log(`Title: ${note.title}`)
        console.log(`Body: ${note.body}`)
    } else {
        console.log('Title aready used')
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else if (command === 'read') {
    notes.getNote(argv.title);
} else {
    console.log('Command not recognized')
}