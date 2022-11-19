// const person = {
//   firstName: 'Bob',  // <= property containing data
//   lastName:  'Smith', // <= ditto
//   fullName: function() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }
// console.log('Hello, ' + person.fullName());


// let number = 0;
// while (number <= 12) {
//   console.log(number);
//   number += 2;
// }

// function countEvenToTwelve(number) {
//   if (number <= 12) {
//     console.log(number);
//     countEvenToTwelve(number+2);
//   }
// }
// countEvenToTwelve(0);

function countUpFrom(number) {
  if (number <= 25) {
  console.log(number);
  countUpFrom(number+5);
  }
}
countUpFrom(0);
