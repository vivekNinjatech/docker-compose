import { Request, Response } from "express";
import db from "../db";

export const getCount = async(req: Request, res: Response) => {
    try {
        const result = await db.query("SELECT * FROM counter");
        res.send({ count: result.rows[0].count });
    } catch (error:any) {
        console.error(error);
        res.status(500).send({error: "Internal Server Error", reason: error.message});
    }
};


export const incrementCount = async(req: Request, res: Response) => {
    try {
        await db.query("UPDATE counter SET count = count + 1");
        res.sendStatus(200);
    } catch (error:any) {
        console.error(error);
        res.status(500).send({error: "Internal Server Error", reason: error.message});
    }
};

export const resetCount = async(req: Request, res: Response) => {
    try {
        await db.query("UPDATE counter SET count = 0");
        res.sendStatus(200);
    } catch (error:any) {
        console.error(error);
        res.status(500).send({error: "Internal Server Error", reason: error.message});
    }
};

export const decrementCount = async(req: Request, res: Response) => {
    try {
        await db.query("UPDATE counter SET count = count - 1");
        res.sendStatus(200);
    } catch (error:any) {
        console.error(error);
        res.status(500).send({error: "Internal Server Error", reason: error.message});
    }
};