import { limits } from "../../helpers/dictionary";
import { randomValueBoard } from "../../helpers/functions-helpers";
import { repeatedElements } from "../../helpers/board-validation";

export const generateBoard = () => {
    const initialValues = [
        {
        label: 'B',
        values:[],
    },
        {
        label: 'I',
        values:[],
    },
        {
        label: 'N',
        values:[],
    },
        {
        label: 'G',
        values:[],
    },
        {
        label: 'O',
        values:[],
    },
    ]
    initialValues.forEach(itemFather => {
        const newValues = Array(5).map((item,index,arrayValue) => {
           const value = randomValueBoard(itemFather.label);
           
           return repeatedElements(arrayValue,value,itemFather.label)
        });
        return {...itemFather, values: newValues}
    })
}