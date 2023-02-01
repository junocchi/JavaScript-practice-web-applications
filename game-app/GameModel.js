class GameModel {
    constructor() {
        this.currentMove = null;
        this.result = null;
    }

    selectMove(move) {
        this.currentMove = move;
    }

    getRandomMove() {
        moves = ['rock', 'paper', 'scissors'];

        return moves[Math.floor(Math.random()*moves.length)];
    }

    getResult() {
        const otherMove = this.getRandomMove();

        if (this.currentMove == otherMove) {
            return 'tie';
        } else if (this.currentMove == 'rock') {
            if (otherMove == 'paper') {
                return 'lose';
            } else {
                return 'win'
            }
        } else if (this.currentMove == 'paper') {
            if (otherMove == 'rock') {
                return 'win';
            } else {
                return 'lose'
            }
        } else {
            if (otherMove == 'paper') {
                return 'win';
            } else {
                return 'lose'
            }
        }
    }
}

module.exports = GameModel;