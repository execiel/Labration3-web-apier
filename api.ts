import { PublishData, CellData } from "./util/types";
import { Request, Response } from "express";
import spriteModel from "./util/models/sprite";

export default function api(app: any) {
  app.get("/api/getNewest", async (req: Request, res: Response) => {
    try {
      let sprites = await spriteModel.find().sort({ $natural: -1 });

      // Control max number of sprites being sent
      if (sprites.length > 25) {
        sprites = sprites.splice(0, 25);
      }

      res.json({ sprites: sprites });
      console.log(sprites);
    } catch (e: any) {
      console.log("Something went wrong in get newest", e.code);
    }
  });

  app.get("/api/getOldest", async (req: Request, res: Response) => {
    try {
      let sprites = await spriteModel.find().sort({ $natural: 1 });

      // Control max number of sprites being sent
      if (sprites.length > 25) {
        sprites = sprites.splice(0, 25);
      }

      res.json({ sprites: sprites });
      console.log(sprites);
    } catch (e: any) {
      console.log("Something went wrong in get newest", e.code);
    }
  });

  app.post(
    "/api/publish",
    async (req: Request<{}, {}, PublishData>, res: Response) => {
      const { title, alias, cells } = req.body;
      try {
        // Validate information
        if (!title || !alias || !cells) {
          console.log("Values undefined in /api/publish");
          return res.json({ status: "bad", message: "Something went wrong" });
        }

        if (title.length > 20 || alias.length > 12) {
          return res.json({ status: "bad", message: "title or alias to long" });
        }

        await spriteModel.create(req.body);
        return res.json({ status: "ok", message: "ok" });
      } catch (e: any) {
        console.log("Error caught in /api/publish", e.code);
        return res.json({ status: "bad", message: "Something went wrong" });
      }
    }
  );
}
