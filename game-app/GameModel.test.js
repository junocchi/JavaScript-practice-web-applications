const GameModel = require("./GameModel")

describe('GameModel', () => {
    it('wins with scissors v.s paper', () => {
        const model = new GameModel();

        model.getRandomMove = jest.fn(() => 'paper')

        model.selectMove('scissors');

        expect(model.getResult()).toBe('win')
    });

    it('loses with rock v.s paper', () => {
        const model = new GameModel();

        model.getRandomMove = jest.fn(() => 'paper')

        model.selectMove('rock');

        expect(model.getResult()).toBe('lose')
    });

    it('wins with rock v.s scissors', () => {
        const model = new GameModel();

        model.getRandomMove = jest.fn(() => 'scissors')

        model.selectMove('rock');

        expect(model.getResult()).toBe('win')
    });

    it('wins with paper v.s rock', () => {
        const model = new GameModel();

        model.getRandomMove = jest.fn(() => 'rock')

        model.selectMove('paper');

        expect(model.getResult()).toBe('win')
    });

    it('loses with paper v.s scissors', () => {
        const model = new GameModel();

        model.getRandomMove = jest.fn(() => 'scissors')

        model.selectMove('paper');

        expect(model.getResult()).toBe('lose')
    });
});