class GameView {
    constructor(model) {
        this.model = model;

        this.rockButton = document.querySelector('#choose-rock');

        this.rockButton.addEventListener('click', () => {
            this.model.selectMove('rock');
            
            console.log('Rock selected');
        });
    }
}

module.exports = GameView;