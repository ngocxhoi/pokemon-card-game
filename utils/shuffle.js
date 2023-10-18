import { shuffle, random } from "lodash";

class totalFunc {
  shuffleArr = function (n) {
    let array = Array(n ** 2 / 2)
      .fill(0)
      .map(() => random(1, 64));
    array = [...array, ...array];
    return shuffle(array);
  };
}

export default new totalFunc();
