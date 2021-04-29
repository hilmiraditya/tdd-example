import { Response } from "express";

export interface ResponseInterface {
    write(response: Response,message: string|null, data: object|null): Response;
}
