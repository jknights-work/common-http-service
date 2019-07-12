
import { HTTPOptions } from '@common-http/model/http.options';

export interface CommonHTTPService<T> {

    get (data : HTTPOptions) : Promise<T>;

    post (data : HTTPOptions) : Promise<T>;

    put (data : HTTPOptions) : Promise<T>;

    delete (data : HTTPOptions) : Promise<T>;

}