import { HTTPOptions } from '@common-http/model/http.options';


export class HTTPOptionsImpl implements HTTPOptions {

    headers : any;
    method : string;
    url : any;
    data : any

    constructor (headers : Object, method : string, url : string, data : any | null) {
        this.method = method;
        this.url = url;
        this.headers = headers;
        this.data = data;
    }

    public setHeaders (headers : any) : any {
        let result = new Headers(headers);
        return result;
    }

    public getData () {
        return JSON.stringify(this.data);
    }

    public setData (data : any) {
        this.data = data;
    }

}