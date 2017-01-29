class GuessingGame {
    constructor() {
    	this.min = null;
    	this.max = null;
    	this.guessNumber = null;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	this.guessNumber = Math.round((this.min + this.max)/2);
    	console.log(this.guessNumber);
    	return this.guessNumber;
    }

    lower() {
    	this.max = this.guessNumber;
    }

    greater() {
    	this.min = this.guessNumber;
    }
}

module.exports = GuessingGame;
