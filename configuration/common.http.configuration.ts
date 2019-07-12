export interface CommonHTTPConfiguration {

    getUrl () : String

    getMethods () : Array<String>

    getHeaders () : Object;

    isValidMethod (method : String) : Boolean;

    getName () : String;

}