import { ResponseInterface } from './response-interface';
import { Created } from './created';
import { Ok } from './ok';
import { NotFound } from './not-found';
import { Response as ExpressResponse} from 'express';

export class Response {
    expressResponse: ExpressResponse;
    
    created: ResponseInterface;
    ok: ResponseInterface;
    notFound: ResponseInterface;

    constructor(expressResponse: ExpressResponse){
        this.expressResponse = expressResponse;

        this.created = new Created();
        this.ok = new Ok();
        this.notFound = new NotFound();
    }

    responseOk(message: string, data: object|null): ExpressResponse{
        return this.ok.write(this.expressResponse, message, data);
    }

    responseCreated(): ExpressResponse{
        return this.created.write(this.expressResponse, null, null);
    }

    responseNotFound(): ExpressResponse{
        return this.notFound.write(this.expressResponse, null, null);
    }

}