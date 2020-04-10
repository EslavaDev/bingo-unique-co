import { randomValueBoard } from "../../helpers/functions-helpers";
import { repeatedElements, emptySpace } from "../../helpers/board-validation";
import {firestore} from 'firebase-admin'

export class BoardService {
    private board = () => {
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
        const values =  initialValues.map(itemFather => {
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
        return values;
    }

    async generateBoard (user: any) {
        try {
            const collection = firestore().collection(`tables`);
            const referenceDoc = collection.doc()
            const table = this.board();
            await referenceDoc.set({
                table,
                userId: user.uuid,
                id:referenceDoc.id,
            })
            const result = await referenceDoc.get()
            return result.data() 
        } catch (error) {
            throw error
        }
    }

    async createPoolBoard (quantity: number, user: any ) {
        try {
            const arrayGenerate = Array(quantity).fill(0,0,quantity);
            const tables = arrayGenerate.map(() => this.board())
            await tables.forEach(async item => {
                const collection = firestore().collection(`tables`);
                const referenceDoc = collection.doc()
                await referenceDoc.set({
                    table: item,
                    userId: user.uuid,
                    id:referenceDoc.id,
                })
            });
            return {tables, user}
        } catch (error) {
            throw error
        }
    }
}