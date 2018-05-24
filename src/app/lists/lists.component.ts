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

  completeJson;

  endpoints : Array<any> = [
    {name: "1 - Simple process", path: "data/1-simple-process"},
    {name: "2 - Multiple human services", path: "data/2-multiple-human-services"},
    {name: "3 - Branching process", path: "data/3-branching-process"},
    {name: "4 - Recursive branching process", path: "data/4-recursive-branching-process"}
  ];

  selectedEndpoint: string = "data/3-branching-process";

  //filter to human task boolean
  filterTHT: boolean = false;

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
        this.completeJson = res;
        if (this.filterTHT) {
          this.filterNodesTHT();
        }
      });
  }

  filterToHumanTask(event) {
    this.filterTHT = event.checked;
    this.fetchJsonData();
  }

  filterNodesTHT() {
    this.completeJson.nodes = this.completeJson.nodes.filter( node => {
      if (node.type == "ServiceTask") {
        this.filterEdgeTHT(node);
      } else {
        return node;
      }
    });
  }

  filterEdgeTHT(node) {
    // let index = this.completeJson.indexOf(node.)
    // this.completeJson.edges.splice();
  }

}

