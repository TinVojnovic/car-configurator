import { selector } from "recoil";
import { configuratorAtoms } from "./atoms";

const totalPrice = selector({
    key: "configurator.configuration.total",
    get: ({ get }) => {
        const car = get(configuratorAtoms.carPrice);
        const color = get(configuratorAtoms.colorPrice);
        const wheels = get(configuratorAtoms.wheelsPrice);
        const interior = get(configuratorAtoms.interiorPrice);
        let sum: number = car + color + wheels + interior;


        console.log(sum);
        return sum;
    },
});

export const configuratorSelectors = { totalPrice };