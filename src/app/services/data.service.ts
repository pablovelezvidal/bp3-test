import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;
  api:string = "http://localhost:3000";

  constructor(private _http: Http) { }

  getList(endpoint) {
    return this._http.get(this.api + '/' + endpoint) .map(result => this.result = result.json());
  }

}
