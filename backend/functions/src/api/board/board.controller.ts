import { generateBoard } from "./board.service"
import { Response, Request } from "express";

export const generate = (req: Request, res: Response) => {
    const data = generateBoard();
    return res.status(200).json({data})
}