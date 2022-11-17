//LLH Pair Programming - The Swapper

const swapper = function(key1, object1, key2, object2) {
  console.log("Swap!");

  // initialize temp with key2
  let temp;
  temp = object2[key2];  //temp now has the value of object2.key2


  object2[key2] = object1[key1]; //object2.key2 now has the value of object1.key1

  //copy value of temp to key1
  object1[key1] = temp;

  console.log("object1: ", object1);
  console.log("object2: ", object2);
};

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });






