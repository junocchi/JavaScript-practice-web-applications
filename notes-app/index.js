const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

// console.log('The notes app is running');
// const notes = new NotesModel();
// console.log(notes.getNotes());

//Create a model and add a new note with the contents 'This is an example note'
const notesModel = new NotesModel()
notesModel.addNote('This is an example note')

//Setup an instance of NotesView, injecting our model into it
const notesView = new NotesView(notesModel)
notesView.displayNotes() //Call the displayNotes method
