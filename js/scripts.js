var suits = ['of Diamonds','of Clubs','of Spades','of Hearts'];
var numbers = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace'];


numbers.forEach(function(number) {
  suits.forEach(function(suit) {
    console.log(number + " " + suit);
  });
});
