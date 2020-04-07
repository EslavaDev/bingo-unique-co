import { randomValueBoard } from "../../helpers/functions-helpers";
import { repeatedElements, emptySpace } from "../../helpers/board-validation";

export const generateBoard = () => {
    const initialValues = [
        {
        label: 'B',
        values:Array(5).fill({},0,5),
    },
        {
        label: 'I',
        values:Array(5).fill({},0,5),
    },
        {
        label: 'N',
        values:Array(5).fill({},0,5),
    },
        {
        label: 'G',
        values:Array(5).fill({},0,5),
    },
        {
        label: 'O',
        values:Array(5).fill({},0,5),
    },
    ]
    return initialValues.map(itemFather => {
        const arrayTemp = Array(5).fill(0,0,5);
        const newValues = itemFather.values.map((item,index) => {
           const value = randomValueBoard(itemFather.label);
           const numberValidate = repeatedElements(arrayTemp,value,itemFather.label, true);
           arrayTemp[index] = numberValidate;
           return {number: numberValidate, active: false};
        });
        const validatioSpace = emptySpace(newValues, itemFather.label);
        return {...itemFather, values: validatioSpace}
    })
    
}

export const createBoard = (arrayForUser: any[], value: number) => {
    return arrayForUser.map(itemFather => {
        const arrayTemp = itemFather.values;
        const newValues = itemFather.values.map((item: any, index: number) => {
           const numberValidate = repeatedElements(arrayTemp,value,itemFather.label, false);
           arrayTemp[index] = numberValidate;
           return numberValidate;
        });
        const validatioSpace = emptySpace(newValues, itemFather.label);
        return {...itemFather, values: validatioSpace}
    })
    
}