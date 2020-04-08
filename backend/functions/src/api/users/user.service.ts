import {firestore} from 'firebase-admin'
import {sign} from 'jsonwebtoken'
import { SEED_AUTH, SEED_EXPIRY } from '../../config/env';

export class UserService {
    async registerUser (username: string, email: string, password: string) {
        try {
            const collection = firestore().collection('users');
            const docsEmail = await (await collection.where('email', '==', email).get()).empty;
            const docsUsername = await (await collection.where('username', '==', username).get()).empty;

            if(docsEmail || docsUsername){
            const referenceDoc = collection.doc()
                await referenceDoc.set({
                    username,
                    password,
                    email,
                    uuid: referenceDoc.id,
                })

                
                const result = await referenceDoc.get()
                return result.data()
            }
            throw Error('Register not found')
        } catch (error) {
            throw error
        }
    }
    async loginUser (username: string, password: string) {
        try {
            const collection = firestore().collection('users');
            const docsUsername = await collection.where('username', '==', username).get();
            const docsUsernameEmpty = docsUsername.empty;
            if(docsUsernameEmpty){
                throw Error('Login not found')
            }
            const resultArray: any[] = [] 
            docsUsername.forEach(doc => resultArray.push(doc.data()));
            const [result] = resultArray;
            if(password !== result.password){
                throw Error('Login not found')
            }
            delete result.password;
            const token = sign({
                user: result,
              }, SEED_AUTH, { expiresIn: SEED_EXPIRY })
            return {user: result, token};
        } catch (error) {
            throw error
        }
    }
}