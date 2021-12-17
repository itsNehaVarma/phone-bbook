import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    url = 'https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts';

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get(this.url);
    }
}


