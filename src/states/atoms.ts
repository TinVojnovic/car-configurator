import { atom } from "recoil";
import { Configuration } from "../types/configuration";

const currentConfiguration = atom<Configuration>({
    key: "configurator.currentConfigId",
    default: {
        id: "",
        car: "",
        color: "",
        wheels: "",
        interior: ""
    },
});

const car = atom<string>({
    key: "configurator.car",
    default: "",
});

const color = atom<string>({
    key: "configurator.color",
    default: "",
});

const wheels = atom<string>({
    key: "configurator.wheels",
    default: "",
});

const interior = atom<string>({
    key: "configurator.interior",
    default: "",
});

const currentUserUid = atom<string>({
    key: "configurator.current.user",
    default: "",
});

export const userAtoms = { currentUserUid }
export const configuratorAtoms = { currentConfiguration, car, color, wheels, interior };