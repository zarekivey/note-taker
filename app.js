const fs = require('fs');
const notes = require('./notes.js');
 // Yargs is good for parsing through argv arguments, title, object
const yargs = require('yargs');

// lodash is a utility module, lodash
const _ = require('lodash');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'The body of the note',
    demand: true,
    alias: 'b'
}

// The app command specifications
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
        }
    )
    .command('list', 'List all notes') 
    .command('read', 'Read note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
let command = argv._[0]; // fetching the command

// Parsing data from the terminal
if (command === 'add') { 
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created')
        notes.logNote(note);
    } else {
        console.log('Title aready used')
    }
} else if (command === 'list') {
    let allNotes = notes.getAll();
    console.log(`Listing ${allNotes.length} note(s).`)
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found')
        notes.logNote(note);
    } else {
        console.log('Note not found')
    }
} else {
    console.log('Command not recognized')
}
