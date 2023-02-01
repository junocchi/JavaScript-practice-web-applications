/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const GameModel = require('./GameModel');
const GameView = require('./GameView');

describe('GameView', () => {
  it('displays 3 buttons', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new GameModel();
    const view = new GameView(model);

    expect(document.querySelectorAll('button').length).toBe(3);
  });
  
  it('selects rock', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new GameModel();
    const view = new GameView(model);

    // TODO: write test
  })
});