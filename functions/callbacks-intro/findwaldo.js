// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach((element, index) => {
    if (element === "Waldo") {
      return found(index); 
    }
  });

  // for (let i = 0; i < names.length; i++) {
  //   let name = names[i];
  //   if (name === "Waldo") {
  //     found(i);   // execute callback
  //   }
  // }
};
// const actionWhenFound = function() {
//   console.log("Found him!");
// }

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Found Waldo at index ", index);
  
});