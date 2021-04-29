export class ResponseAttribute {
    status: boolean;
    message: string|null;
    data: object|null;

    constructor(status: boolean, message: string|null, data: object|null) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    send(): object{
        return {
            status: this.status,
            message: this.message,
            data: this.data
        };
    }
}