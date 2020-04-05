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

        const newValues = Array(5).map(() => {
            return  Math.floor(Math.random() * ((15+1) - 1)) + 1;
        });
        return {...itemFather, values: newValues}
    })
}