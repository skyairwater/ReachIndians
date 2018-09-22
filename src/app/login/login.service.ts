import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'


@Injectable()
export class LoginService {

    constructor(private http : Http) { }

    authenticate(token: string): boolean 
    {
        var user = { emailId: "ganesh@ganesh.com", token: token }
        this.http.post(environment.loginUrl, user )
        .subscribe(
            data => { console.log(data); },
            error => { console.log("Error", error )}
            );
            
            return true;

    }

    getTest()   {
        this.http.get(environment.testApiUrl)
        .subscribe(
            data => { console.log(data); },
            error => { console.log("Error", error )}
            );
        
    }

    postTest()   {
        
        var user = { emailId: "ganesh@ganesh.com", token: "abcd" }

        this.http.post(environment.loginUrl, user)
        .subscribe(
            data => { console.log(data); },
            error => { console.log("Error", error )}
            );
        
    }
}