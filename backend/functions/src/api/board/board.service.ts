import { limits } from "../../helpers/dictionary";

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
        const {min, max} = limits(itemFather.label);
        const newValues = Array(5).map(() => {
            return  Math.floor(Math.random() * ((max+1) - min)) + min;
        });
        return {...itemFather, values: newValues}
    })
}