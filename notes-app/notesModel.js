
class NotesModel {
  
  constructor(){
    this.allNotes = []; // @allNotes
  }
  
  addNote(item) {
    return this.allNotes.push(item);
  }

  getNotes() {
    return this.allNotes;
  }

  resetNotes() {
    return this.allNotes.splice(0, this.allNotes.length);
  }
}

module.exports = NotesModel;


