import { useTimeToPlay } from "~/stores/timePlayStore.js";
import { useLevelStore } from "~/stores/levelPlayStore.js";

class LogicPlay {
  logicFlip = async (location, numOfCardFlipped, amountCard, elements) => {
    amountCard.push(location);
    if (amountCard.length == 2) {
      if (amountCard[0].el != amountCard[1].el) {
        await new Promise((resolve) => {
          setTimeout(resolve, 500);
        });
        elements.value[amountCard[0].index].isFlip();
        elements.value[amountCard[1].index].isFlip();
      } else {
        elements.value[amountCard[0].index].isDone = true;
        elements.value[amountCard[1].index].isDone = true;
        numOfCardFlipped.value += 2;
      }
      amountCard.length = 0;
    }
  };

  logicEnd = async (numOfCardFlipped) => {
    if (numOfCardFlipped.value == useLevelStore().mode ** 2) {
      useTimeToPlay().stopTime();
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      await navigateTo("/chose", {
        // external: true,
        // open: {
        //   target: "_blank",
        //   windowFeatures: {
        //     width: 500,
        //     height: 500,
        //     left: 300,
        //     top: 100,
        //   },
        // },
      });
    }
    numOfCardFlipped = 0;
  };
}

export default new LogicPlay();
