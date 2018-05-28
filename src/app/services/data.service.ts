import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { APP_CONFIG, IAppConfig } from '../config/app.config';

@Injectable()
export class DataService {

  result:any;
  cachedResult = {};

  constructor(private _http: Http, @Inject(APP_CONFIG) private config:IAppConfig) { }

  getList(endpoint) {
    if (this.cachedResult[endpoint] != undefined) {
      console.log("Fetching data from cache: ");
      console.log(this.cachedResult);
      return this.cachedResult[endpoint];
    } else {
      console.log("Fetching data from service!");
      let result = this._http.get(this.config.apiUrl + '/' + endpoint) .map(result => this.result = result.json());
      this.cachedResult[endpoint] = result;
      return result;
    }
  }

}
