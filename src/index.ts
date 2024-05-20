import express, { NextFunction, Request, Response } from "express";
import usersRouter from "./routes/author";
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors(
    { origin : '*'}
));

app.use('/api/authors', usersRouter);

const PORT = 3000;

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`); });