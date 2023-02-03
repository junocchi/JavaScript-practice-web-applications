class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.buttonEl.addEventListener('click', () => {
      this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    console.log('Thanks for clicking me!');
    const divMessage = document.createElement('div');
    divMessage.id = 'message';
    divMessage.innerHTML = 'This message displayed by JavaScript';
    
    document.querySelector('#main-container').append(divMessage);
  }

  hideMessage() {
    document.querySelector('#message').remove();
  }
}

module.exports = MessageView;