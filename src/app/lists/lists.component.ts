import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})

export class ListsComponent implements OnInit {
  //entire json response from the server
  completeJson;

  //datasource endpoints list
  endpoints : Array<any> = [
    {name: "1 - Simple process", path: "data/1-simple-process"},
    {name: "2 - Multiple human services", path: "data/2-multiple-human-services"},
    {name: "3 - Branching process", path: "data/3-branching-process"},
    {name: "4 - Recursive branching process", path: "data/4-recursive-branching-process"}
  ];

  iconsList = {
    Start: "play_circle_outline",
    End: "stop",
    ServiceTask: "android",
    Gateway: "compare_arrows",
    HumanTask: "accessibility"
  }

  selectedEndpoint: string = "data/3-branching-process";

  //filter to human task condition
  filterTHT: boolean = false;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.fetchJsonData();
  }

  changeEndpoint(endpoint) {
    /**
     * Changes the endpoint where the data is going to come from
     */
    this.selectedEndpoint = endpoint.path;
    this.fetchJsonData();
  }

  fetchJsonData() {
    /**
     * retrieves the data from the server
     */
    this._dataService.getList(this.selectedEndpoint)
      .subscribe(res => {
        this.completeJson = res;
        //If the option to filter is active, it inmediately filters the information
        if (this.filterTHT) {
          this.filterNodesTHT();
        }
      });
  }

  filterToHumanTask(event) {
    /**
     * Function in charge of setting the option to filter the information and retrieve the data filtered
     */
    this.filterTHT = event.checked;
    this.fetchJsonData();
  }

  filterNodesTHT() {
    /**
     * Filter the nodes to Human Tasks
     */
    this.completeJson.nodes = this.completeJson.nodes.filter( node => {
      if (node.type == "ServiceTask") {
        //fix also the edges path
        this.filterEdgeTHT(node);
      } else {
        //return just the non-Service tasks elements
        return node;
      }
    });
  }

  filterEdgeTHT(node) {
    /**
     * Filter the edges to human tasks
     * $node = the node (Service task) being deleted from the nodes
     */
    var auxEdge = "";
    this.completeJson.edges.forEach((edge, index) => {
      if (edge.to == node.id) {
        auxEdge = edge.from;
        this.completeJson.edges[index+1].from = auxEdge;
        this.completeJson.edges.splice(index, 1);
      }
    });
  }

}

