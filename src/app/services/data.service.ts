import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;
  api:string = "https://api.jsonbin.io";

  constructor(private _http: Http) { }

  getList(endpoint) {
    return this._http.get(this.api + '/' + endpoint) .map(result => this.result = result.json());
  }

}
