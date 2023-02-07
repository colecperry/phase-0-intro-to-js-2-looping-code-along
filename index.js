const cards = ["Charlie", "Samip", "Ali"]
const event = ("Birthday")
const arrayName = []

function writeCards(cards, event) {
  for (let i = 0; i < cards.length; i++) {
    arrayName.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
  }

  return arrayName;
}

//writeCards(cards,event);

function countDown(count) {
    while (count >= 0) {
    console.log(count);
    count-=1}
    //console.log(count)
}