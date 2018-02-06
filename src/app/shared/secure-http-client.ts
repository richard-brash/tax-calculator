import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Router} from '@angular/router';

//  This is a wrapper HttpClient that allows my to add an Authorization Header to every call.

@Injectable()
export class SecureHttpClient {

    constructor(
        protected http: Http,
        private router: Router
    ) { }

    createAuthorizationHeader(headers: Headers) {
        //  Not used right now but keeping it in the mix for later.
        const auth = btoa('keyAuthorize:MyK3yC0d3');
        headers.append('Authorization', 'Basic ' + auth);
    }


    get(url) {
        const headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    }

    post(url, data) {

        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }

}
