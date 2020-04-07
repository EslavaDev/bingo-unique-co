import { limits } from "./dictionary";

export const randomValueBoard = (label: string) => {
    const {min, max} = limits(label);
    return  Math.floor(Math.random() * ((max+1) - min)) + min;
}
export const randomValueGame = () => {
    return  Math.floor(Math.random() * ((75+1) - 1)) + 1;
}