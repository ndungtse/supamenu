import { Request, Response, Router } from "express";

const appRouter = Router();

appRouter.get("/", async (req: Request, res: Response) => {
  /*#swagger.tags = ['App']
    #swagger.description = 'This is the root route'*/
  res.send("Hello World");
});

export default appRouter;
