class NotesView {
  constructor(instanceOfNotesModel) {
    this.notesModel = instanceOfNotesModel;
    this.mainContainerEl = document.querySelector('#main-container');
  };

  displayNotes() {
    let list = this.notesModel.getNotes()

    list.forEach((note) => {
      let div = document.createElement('div')
      div.textContent = note;
      div.className = 'note';
      this.mainContainerEl.append(div) // a new div element on the page (with an HTML class "note")
    });
  };
};

module.exports = NotesView;