
import { HTTPOptions } from "../model/http.options";
import { HTTPOptionsImpl } from "../model/impl/http.options.impl";
import { AbstractHTTPService } from "../service/impl/abstract.common.http.service.impl";

export class MockService extends AbstractHTTPService {

    private options : HTTPOptions;
    
    constructor () {
        super("Mock Service");
        this.options = new HTTPOptionsImpl({}, "GET", "https://yougamers-dev.azurewebsites.net/api/getVideosCI", {id : "Ivn2nGP6C70", date : "1"});
    }

    public async getTime () {
       let result;
        await super.oauth(this.options).then((response : any) => {
                console.log(response);
                if (response.data) {
                    result = response;
                } else {
                    result = {error : "error"};
                }  
            }).catch((err : any) => {
                console.log(err);
        });
        return result;
    }   
        
    



}