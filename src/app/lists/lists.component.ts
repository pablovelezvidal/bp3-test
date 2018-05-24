import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Node } from '../models/Node';
import { Edge } from '../models/Edge';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  nodes : Array<Node>;
  edges : Array<Edge>;
  entireResponse: Array<any>;
  endpoints : Array<any> = [
    {name: "1 - Simple process", path: "data/1-simple-process"},
    {name: "2 - Multiple human services", path: "data/2-multiple-human-services"},
    {name: "3 - Branching process", path: "data/3-branching-process"},
    {name: "4 - Recursive branching process", path: "data/4-recursive-branching-process"}
  ];
  selectedEndpoint: string = "data/3-branching-process";

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.fetchJsonData();
  }

  changeEndpoint(endpoint) {
    this.selectedEndpoint = endpoint.path;
    this.fetchJsonData();
  }

  fetchJsonData() {
    this._dataService.getList(this.selectedEndpoint)
      .subscribe(res => {
        this.entireResponse = res;
        this.nodes = res.nodes; 
        this.edges = res.edges
      });
  }

}
