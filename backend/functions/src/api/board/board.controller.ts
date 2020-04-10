import { BoardService } from "./board.service";
import { Response, Request } from "express";
export class BoardController {
  private service = new BoardService();

  generate = async (req: Request, res: Response) => {
    try {
      const { user }: any = req;
      const data = await this.service.generateBoard(user);
      console.log(data)
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(400).json({ error: error, code: "REGISTER_NOT_FOUND" });
    }
  };
  generatePool = async (req: Request, res: Response) => {
    try {
      const { quantity } = req.query;
      const { user }: any = req;
      console.log(quantity, user)
      const data = await this.service.createPoolBoard(parseInt(quantity), user);
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(400).json({ error: error, code: "REGISTER_NOT_FOUND" });
    }
  };
}