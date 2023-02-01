class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    let p = document.createElement("p")
    this.mainContainerEl.append("This paragraph has been dynamically added by JavaScript", p)
  }
  clearParagraphs() {
    let allP = document.querySelectorAll("p")
    allP.forEach((p) => {
      p.remove();
    });
  }
}

module.exports = View;