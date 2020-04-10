import { UserService } from "./user.service"
import { Response, Request } from "express";

export class UserController {
    private service = new UserService();
    
    register = async (req: Request, res: Response) => {
    
        try {
            const {username, email, password} = req.body;
            const data = await this.service.registerUser(username, email, password);
            console.log(data)
            return res.status(200).json({data})    
        } catch (error) {
            return res.status(400).json({error: error, code: 'REGISTER_NOT_FOUND'})
        }
    }
    login = async (req: Request, res: Response) => {
    
        try {
            const {username, password} = req.body;
            const data = await this.service.loginUser(username, password);
            return res.status(200).json({data})    
        } catch (error) {
            return res.status(400).json({error: error, code: 'LOGIN_NOT_FOUND'})
        }
    }
    decode = async (req: Request, res: Response) => {
    
        try {
            const {user}: any = req;
            console.log(user)
            const {uuid} = user;
            if(!uuid){
                throw Error('Token not found')
            }
            const data = await this.service.decodeToken(uuid);
            return res.status(200).json({data})    
        } catch (error) {
            return res.status(400).json({error: error, code: 'LOGIN_NOT_FOUND'})
        }
    }
}
