class GuessingGame {
    constructor() {
    	this.min = null;
    	this.max = null;
    	this.guessNumber = null;
    	let number = null;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	let guessNumber = (this.min + this.max)/2;
    	guessNumber = Math.round(guessNumber*10)/10;
    	console.log(guessNumber);
    	while (guessNumber !== number){
    		if(guessNumber < number){
    			this.lower();
    		} else if (guessNumber > number){
    			this.greater();
    		};
    	}
    	return guessNumber;
    }

    lower() {
    	this.min = guessNumber;
    	this.max = max;
    }

    greater() {
    	this.max = guessNumber;
    	this.min = min;
    }
}

module.exports = GuessingGame;
