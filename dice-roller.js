let diceRolls = process.argv[2];
let result = "";
function rollingDice(diceRolled) {
  for(let i = 1; i <= diceRolled; i++) {
    if(i == diceRolled) {
      result += Math.floor(Math.random() * 6 + 1);
    } else {
      result += Math.floor(Math.random() * 6 + 1) + ", ";
    }
  }
  return result;
}
console.log("Rolled 3 dice:", rollingDice(diceRolls));