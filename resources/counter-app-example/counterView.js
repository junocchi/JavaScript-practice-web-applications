class CounterView {
  constructor(model) {
    this.model = model;

    const incrementButtonEl = document.querySelector('#increment-btn');
    // document.querySelector will look through the document (HTML document being 
    // displayed in the browser) and find the increment button id and assign
    // it to incrementButtonEl variable. Then, when we add the addEventListener
    // the click function is going to run that script

    const decrementButtonEl = document.querySelector('#decrement-btn');

    incrementButtonEl.addEventListener('click', () => {
      // Increment on the model, then refresh the view
      this.model.increment();
      this.display();
    });

    decrementButtonEl.removeEventListener('click', () => {
      // Decrement on the model, then refresh the view
      this.model.decrement();
      this.display();
    });
  }

  display() {
    document.querySelector('#counter').textContent = this.model.getCounter();
  }
}

module.exports = CounterView;