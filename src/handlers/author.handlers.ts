import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import { db } from "../utils/db";

export async function getAllAuthors(request: Request, response: Response) {
    try {
        const authors = await db.author.findMany();
        response.send(authors);
    }
    catch (error) {
        response.send(error);    
    }

}

export function getAuthor(request: Request, response: Response) {
    const {id} = request.params;
    response.send(id);
}