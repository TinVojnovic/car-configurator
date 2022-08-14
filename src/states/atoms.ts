import { atom } from "recoil";
import { Configuration } from "../types/configuration";

const currentConfiguration = atom<Configuration>({
    key: "configurator.currentConfig",
    default: {
        id: "",
        car: "",
        color: "",
        wheels: "",
        interior: ""
    },
});

const currentUserUid = atom<string>({
    key: "configurator.current.user",
    default: "kurac",
});

export const userAtoms = { currentUserUid }
export const configuratorAtoms = { currentConfiguration };