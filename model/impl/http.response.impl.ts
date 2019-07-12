
import { HTTPResponse } from '@common-http/model/http.response';


export class HTTPResponseImpl implements HTTPResponse {

    status : any;
    data : any;

    constructor (status : any, data : any) {
        this.status = status;
        this.data = data;
    }

    public getData () {
        return this.data;
    };

    public getStatus () {
        return this.status
    };

    public isValid () : boolean {
        let result = false;
        if (this.status) {
            if (this.status === 200) {
                result = true;
            }
        }
        return result;
    };

}