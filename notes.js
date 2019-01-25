const fs = require('fs');

let fetchNotes = () => {
    try {
        // fetching the notes
        const notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);        
    } catch (e) {
        // if theres no notes or theres no file
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
};

const addNote = (title, body) => {
    let notes = fetchNotes();
    const note = {
       title,
       body 
    };

    let duplicateNotes = notes.filter((note) => note.title === title);
    // adding the new note to the array of notes/json file, if its not a dupe
    if (duplicateNotes.length === 0) {
        notes.push(note); 
        saveNotes(notes);
        // returns to where the function is called
        return note;
    }
};

const getAll = () => {
    return fetchNotes();
};

const getNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0]; 
};

const removeNote = (title) => {
    let notes = fetchNotes();
    // filtering out the notes that dont match the inputed title
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

let logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};