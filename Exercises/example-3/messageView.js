class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    
    // every time we click the button with id = show-message-button,
    // it will show a message
    this.buttonEl.addEventListener('click', () => {
      this.displayMessage();
    });
  }

  displayMessage() {
    console.log('Thanks for clicking me!');
    var divMessage = document.createElement("diMessage");
    divMessage.id = "message";
    divMessage.innerHTML = "This message displayed by JavaScript";
    
    // option with querySelector and append:
    document.querySelector('#main-container').append(divMessage);
    
    // option with getElementById and appendChild:
    // var mainContainer = document.getElementById("main-container");
    // mainContainer.appendChild(divMessage);
  }
}

module.exports = MessageView;