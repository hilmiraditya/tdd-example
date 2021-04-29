import { Response } from "express";
import { ResponseInterface } from './response-interface';
import { ResponseAttribute } from './response-attribute';

export class Ok implements ResponseInterface {
    write(response: Response,message: string|null, data: object|null): Response{
        const responseStatus: number = 200;
        const status: boolean = true;
        const responseAttribute = new ResponseAttribute(status,message,data); 

        return response.status(responseStatus).send(responseAttribute.send());
    }
}