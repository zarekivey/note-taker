console.log('Starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
    let notes = [];
    const note = {
       title,
       body 
    };

    try {
        // fetching the notes
        const notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);        
    } catch (e) {

    }

    let duplicateNotes = notes.filter((note) => note.title === title);
    // adding the new note to the array of notes, if its not a dupe
    if (duplicateNotes.length === 0) {
        notes.push(note); 
        fs.writeFileSync('notes-data.json', JSON.stringify(notes))
    }
};

const getAll = () => {
    console.log('Getting all notes')
};

const getNote = (title) => {
    console.log('Getting note', title)
}

const removeNote = (title) => {
    console.log('Removing note', title)
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};