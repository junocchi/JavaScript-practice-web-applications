/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    // Arrange (we set the document needed for the test and 
    // we instantiate the view)
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    // Act (getting a reference to the button on the page with 
    // id = show-message-button, and we are simulating
    // the user click on that button)
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    // Assert (make sure the element div with id = "message" is
    // not empty. In other words, that it has an innerText content)
    expect(document.querySelector('#message')).not.toBeNull();
  });

  it('hides the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    // Act 
    // First, simulate the user click the button and show a message
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    // then, hide the message
    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();

    // Assert (make sure the element div with id = "message" is empty)
    expect(document.querySelector('#message')).toBeNull();
  });
});