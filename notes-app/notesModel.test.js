// As a busy person, so I can remember things,
// I'd like to get my notes on my Notes app;

// As a busy person, so I can remember things,
// I'd like to add notes to my Notes app;

// As a busy person, so I can remember things,
// I'd like to reset notes from my Notes app;

const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  it('returns an empty array', () => {
    const notes = new NotesModel();
    expect(notes.getNotes()).toEqual([]);
  });

  it('add notes to my Notes app', () => {
    const notes = new NotesModel();
    notes.addNote("Films to watch");
    notes.addNote("Places to visit");
    expect(notes.getNotes()).toEqual(["Films to watch", "Places to visit"]);
  });

  it('reset notes from my Notes app', () => {
    const notes = new NotesModel();
    notes.resetNotes();
    expect(notes.getNotes()).toEqual([]);
  });
});

/*
RUBY

notes = NotesModel.new
notes.addNote('Films to watch')
result = notes.getNotes # => 'Fims to watch'
expect(result).to eq('Fims to watch')

*/