import { CommonHTTPService } from '@common-http/service/common.http.service';
import { HTTPOptions } from '@common-http/model/http.options';

export abstract class AbstractHTTPService implements CommonHTTPService<any> {

    private serviceName : String;
    private isRunning : boolean;

    constructor (serviceName : String) {
        this.serviceName = serviceName;
        this.isRunning = true;
    }

    public async get (options : HTTPOptions) {
        let result;
        let url = (options.data) ? this.buildQueryString(options.url, options.data) : options.url;
        console.log(url);
        await fetch (
            url,
            {
                method : options.method,
                headers : options.headers
            }
        ).
        then(response => 
            response.json().then(data => ({
                data: data,
                status: response.status
            })
        ).then(res => {
            console.log(res);
            result = res;
        }))
        .catch(function(error) {
            console.error(error); 
            return {error : error.message}  
        }); 
        return result;
        
    }

    public async oauth (options : HTTPOptions) {
        let result;
        let url = (options.data) ? this.buildQueryString(options.url, options.data) : options.url;
        console.log(url);
        await fetch (
            url,
            {
                method : options.method,
                headers : options.headers
            }
        ).
        then(response => 
            response.text().then(data => ({
                data: data,
                status: response.status
            })
        ).then(res => {
            console.log(res);
            result = res;
        }))
        .catch(function(error) {
            console.error(error); 
            return {error : error.message}  
        }); 
        return result;
        
    }

    public async post (options : HTTPOptions) {
        let result = null;
        console.log(options.getData());
        await fetch (
            options.url,
            {
                method : options.method,
                headers : options.headers,
                body : options.getData()
            }
        )
        .then((response) => {
            if (response.ok) {
                try {
                    return response.json();
                } catch (e) {
                    throw new TypeError (e);
                }
                
            } else {
                console.log("error with response", response.text());
            }
        })
        .catch(function(error) {
            console.error(error);   
        }); 
        return result;
    }

    public async put (options : HTTPOptions) {
        //To Do
    }

    public async delete (options : HTTPOptions) {
        //To Do
    }

    private buildQueryString (url : string, params : Object) : string {
        let result = url;
        let esc = encodeURIComponent;
        result += "?" + Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');

        return result;
    }

    


}

export default function test () {
    return "hello!";
}