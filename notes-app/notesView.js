class NotesView {
  constructor(instanceOfNotesModel) {
    this.notesModel = instanceOfNotesModel;
    this.mainContainerEl = document.querySelector('#main-container');
  };

  displayNotes() {
    const list = this.notesModel.getNotes()
    
    // For each note, create and append a new element on the main container
    list.forEach((note) => {
      const noteEl = document.createElement('div')
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl); // a new div element on the page (with an HTML class "note")
    })
  }
}

module.exports = NotesView;