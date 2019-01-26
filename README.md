# note-taker
Note Taker is a command line interface note taking application built with node.js
-----------USAGE-----------
- From the command line, navigate into the app folder.

- Command List -
  - add (add a note)
  - remove (remove a note)
  - list (list all notes)
  - read (read a specific note)

- Adding a new note requires you to add a title and body.
  - Ex: node app.js add --t="Note title" --b="Note body"

- Removing a note requires a notes title.
  - Ex: node app.js remove --t="Note title"

- Reading a note requires a notes title.
  - Ex: node app.js read --t="Note title"

- Listing all notes requires only the command.
  - Ex: node app.js list
