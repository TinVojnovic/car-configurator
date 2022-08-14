import { atom } from "recoil";
import { Configuration } from "../types/configuration";

const currentConfiguration = atom<Configuration>({
    key: "configurator.pizza.discount",
    default: {
        car: "",
        color: "",
        wheels: "",
        interior: ""
    },
});

export const configuratorAtoms = { currentConfiguration };