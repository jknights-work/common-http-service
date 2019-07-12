import { CommonHTTPConfiguration } from "../common.http.configuration";

export abstract class AbstractCommonHTTPConfiguration implements CommonHTTPConfiguration {
    private url : string;
    private availableMethods : Array<String>;
    private headers : Object;
    private name : String;

    constructor (url, availableMethods, headers, name) {
       this.url = url;
       this.availableMethods = availableMethods;
       this.headers = headers;
       this.name = name;
    }

    public getUrl () {
        return this.url;
    }

    public getMethods () {
        return this.availableMethods;
    }

    public getHeaders () {
        return this.headers;
    }

    public getName () {
        return this.name;
    }

    public isValidMethod (method : String) {
        return (this.availableMethods.indexOf(method) !== -1);
    }
}