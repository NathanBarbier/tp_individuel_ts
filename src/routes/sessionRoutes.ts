import { Router, Response, Request } from "express";
import SessionModel from "../models/Session";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    const query = async () => {
        try {
            let result = await SessionModel.find({});
            res.status(200).send(result);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error while getting documents");
        }
    };
    query();
});

router.get("/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    if (!id) {
        res.status(400).send("Invalid id");
    } else {
        const query = async () => {
            try {
                let result = await SessionModel.findById(id).exec();
                if (!result) {
                    res.status(404).send("Session not foud");
                } else {
                    res.status(200).send(result);
                }
            } catch (error) {
                console.log(error);
                res.status(500).send("Error while getting document");
            }
        };
        query();
    }
});

router.post("/", (req: Request, res: Response) => {
    let document = new SessionModel(req.body);
    const query = async () => {
        try {
            let result = await document.save();
            res.status(200).send(result);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error while saving document");
        }
    };
    query();
});

router.put("/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    if (!id) {
        res.status(400);
        res.send("Invalid id");
    } else {
        const query = async () => {
            try {
                const result = await SessionModel.findByIdAndUpdate(
                    id,
                    {
                        film: req.body.film,
                        date: req.body.date,
                        time: req.body.time,
                        availableSeats: req.body.availableSeats,
                    },
                    {
                        returnDocument: "after",
                    }
                );
                if (!result) {
                    res.status(404).send("Session not foud");
                } else {
                    res.status(200).send(result);
                }
            } catch (error) {
                console.log(error);
                res.status(500).send("Error while updating document");
            }
        };
        query();
    }
});

router.delete("/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    if (!id) {
        res.status(400);
        res.send("Invalid id");
    } else {
        const query = async () => {
            try {
                const result = await SessionModel.findByIdAndDelete(id);
                if (!result) {
                    res.status(404).send("Session not foud");
                } else {
                    res.status(200).send(result);
                }
            } catch (error) {
                console.log(error);
                res.status(500).send("Error while updating document");
            }
        };
        query();
    }
});

export default router;
