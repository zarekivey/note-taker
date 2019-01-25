const fs = require('fs');

//Saving a new note
const originalNote = {
    title: 'title',
    body: 'body'
};
const originalNoteString = JSON.stringify(originalNote) 
fs.writeFileSync('notes.json', originalNoteString)

// Reading a note
const noteString = fs.readFileSync('notes.json')
const note = JSON.parse(noteString)
console.log(typeof note);
console.log(note.title);

// parse - turns json into an object that you can access 