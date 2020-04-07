import { randomValueGame } from "../../helpers/functions-helpers";
import { repeatedElements } from "../../helpers/board-validation";

const temp: any[] = [];
export const generateGame = () => {
    const value = randomValueGame();
    const validationArray = repeatedElements(temp,value, undefined, true)
    console.log(validationArray)
    temp.push(validationArray)
    return temp;
}