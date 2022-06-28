const { BadRequestError } = require("../utils/errors");
class GiftExchange {
  static pairs(names) {
    //     If the number of names provided is odd, it should throw a new Error explaining that the number of names can't be odd.
    if (names.length % 2 != 0) {
      console.log("you must have even numbers");
      return new BadRequestError();
    }
    //  Should implements an algorithm responsible for randomly randomly pairing names together
    //  Should use the Math.random method
    //  Should not have any names repeated
    //  Should not exclude any names
    //  Should return an array of tuples (array with only two items) that represent the random pairings
    let newArr = [];
    while (names.length >= 2) {
      let rnd1 = Math.random() * names.length;
      let name1 = names.splice(rnd1, 1)[0];

      let rnd2 = Math.random() * names.length;
      let name2 = names.splice(rnd2, 1)[0];

      newArr.push([name1, name2]);
      //console.log("from: " + name1 + " to: " + name2);
    }
    return newArr;
  }

  static traditional(names) {
    //     Should implement an algorithm to randomly match each name to another name in the list in sequential order:
    // if (names.length % 2 != 0) {
    //   console.log("you must have even numbers");
    //   return new BadRequestError();
    // }

    let newArr2 = [];
    while (names.length >= 2) {
      let rnd1 = Math.random() * names.length;
      let name1 = names.splice(rnd1, 1)[0];

      let rnd2 = Math.random() * names.length;
      let name2 = names.splice(rnd2, 1)[0];

      // newArr2.push([name1, name2]);
      newArr2.push([name1 + " is giving a gift to " + name2]);
      console.log(name1 + " is giving a gift to " + name2);
    }
    // return newArr2.push([name1 + " is giving a gift to " + name2]);
    return newArr2;
  }
}

module.exports = GiftExchange;
