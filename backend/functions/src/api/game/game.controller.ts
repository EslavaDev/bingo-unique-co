import { generateGame } from "./game.service"
import { Response, Request } from "express";

export const generate = (req: Request, res: Response) => {
    const data = generateGame();
    return res.status(200).json({data})
}

export const win = (req: Request, res: Response) => {
    const {data} = req.body;
    return res.status(200).json({data})
}

export const create = () => {
    console.log('h')
}