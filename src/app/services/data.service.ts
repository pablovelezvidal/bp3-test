import { Injectable } from '@angular/core';
import { Node } from '../logic/Node';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) { }
  public endpoint = "http://localhost:3000";

  getOne(nodeId: string, callback) {
    this.http.get(`${this.endpoint}/nodes/${nodeId}`)
      .subscribe(response => {
        callback(response.json());
      })
  }

  getList(callback) {
    this.http.get(`${this.endpoint}/nodes`)
      .subscribe(response => {
        callback(response.json());
      });

  }

}
