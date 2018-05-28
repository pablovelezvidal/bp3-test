import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { APP_CONFIG, IAppConfig } from '../config/app.config';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http, @Inject(APP_CONFIG) private config:IAppConfig) { }

  getList(endpoint) {
    return this._http.get(this.config.apiUrl + '/' + endpoint) .map(result => this.result = result.json());
  }

}
