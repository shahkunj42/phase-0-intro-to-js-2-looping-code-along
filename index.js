const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}
wrapGifts(gifts);

function writeCards(names, events) {
    const thankYou = [];
    for (let i = 0; i < names.length; i++){
        thankYou.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`); 
    }
    return thankYou;
}

function countDown(number){
    while (number >= 0) {
        console.log(number--)
    }
}