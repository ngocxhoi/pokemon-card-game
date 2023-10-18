import shuffle from "lodash/shuffle";
import random from "lodash/random";

const mixArr = function (n) {
  let array = Array(n)
    .fill(0)
    .map(() => random(1, 64));
  array = [...array, ...array];
  return shuffle(array);
};

export default mixArr();
