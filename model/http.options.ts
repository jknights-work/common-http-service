export interface HTTPOptions {

    headers : Headers,
    url : string,
    data : any,
    method  : string | "GET" | "PUT" | "DELETE" | "POST"

    getData () : string

    setData (dadta : any) : void;

}