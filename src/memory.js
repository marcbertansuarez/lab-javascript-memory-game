class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    } else {
      for (let i = 0; i < this.cards.length; i++) {
        let temp = this.cards[i];
        let r = Math.floor(Math.random() * this.cards.length);
        this.cards[i] = this.cards[r];
        this.cards[r] = temp;
      }
      return this.cards;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
