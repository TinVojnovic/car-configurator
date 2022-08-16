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
    default: "RS5",
});

const carPrice = atom<number>({
    key: "configurator.car.price",
    default: 0,
});

const color = atom<string>({
    key: "configurator.color",
    default: "",
});

const colorPrice = atom<number>({
    key: "configurator.color.price",
    default: 0,
});

const wheels = atom<string>({
    key: "configurator.wheels",
    default: "",
});

const wheelsPrice = atom<number>({
    key: "configurator.wheels.price",
    default: 0,
});

const interior = atom<string>({
    key: "configurator.interior",
    default: "",
});

const interiorPrice = atom<number>({
    key: "configurator.interior.price",
    default: 0,
});

const currentUserUid = atom<string>({
    key: "configurator.current.user",
    default: "",
});

export const userAtoms = { currentUserUid }
export const configuratorAtoms = { currentConfiguration, car, color, wheels, interior , carPrice, colorPrice, wheelsPrice, interiorPrice};