import { Response } from "express";
import { ResponseAttribute } from "./response-attribute";
import { ResponseInterface } from './response-interface';

export class NotFound implements ResponseInterface {
    write(response: Response,message: string|null, data: object|null): Response{
        const responseStatus: number = 404;
        const status: boolean = false;
        const responseAttribute = new ResponseAttribute(status,null,null);

        return response.status(responseStatus).send(responseAttribute.send());
    }
}