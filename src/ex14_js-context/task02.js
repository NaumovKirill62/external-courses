function Hangman(word) {
  this.gameWord = word.split('');
  this.hiddenWord = this.gameWord.map(elem => '_');
  this.countMistakes = 6;
  this.wrongWords = [];
  this.guess = function(word) {
    let result;
    if (this.gameWord.indexOf(word) !== -1) {
      for(var i = 0; i < this.gameWord.length; i++) {
        if(this.gameWord[i] === word) {
          this.hiddenWord[i] = word;
        }
      }

      result = this.hiddenWord;
    } 
    if (this.gameWord.indexOf(word) === -1) {
      this.countMistakes -= 1;
      this.wrongWords.push(word);

      result = `wrong letter, errors left ${this.countMistakes} | ${this.wrongWords }`;
    }
    return result;
  };
  this.getGuessedString = function() {
    return this.hiddenWord;
  };
  this.getErrorsLeft = function() {
    return this.countMistakes;
  };
  this.getWrongSymbols = function() {
    return this.wrongWords;
  };
  this.getStatus = function() {
    return `${this.hiddenWord} | errors left ${this.countMistakes}`;
  };

  this.startAgain = function(word) {
    this.gameWord = word.split('');
    this.hiddenWord = this.gameWord.map((elem) => {return '_'} );
    this.countMistakes = 6;
    this.wrongWords =[];
  };
}
const hangman = new Hangman('webpurple');

module.export = hangman;
