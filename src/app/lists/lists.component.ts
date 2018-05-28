import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
  animations: [
    trigger('nodes', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('50ms', [
          animate('.2s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('50ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})

export class ListsComponent implements OnInit {
  //entire json response from the server
  completeJson;

  //datasource endpoints list
  endpoints : Array<any> = [
    {name: "1 - Simple process", path: "5b0b35000fb4d74cdf23e7f5"},
    {name: "2 - Multiple human services", path: "5b0b35df7a973f4ce5784918"},
    {name: "3 - Branching process", path: "5b0b360ec2e3344ccd96c313"},
    {name: "4 - Recursive branching process", path: "5b0b3633c83f6d4cc734a01e"}
  ];

  iconsList = {
    Start: "play_circle_outline",
    End: "stop",
    ServiceTask: "android",
    Gateway: "compare_arrows",
    HumanTask: "accessibility"
  }

  selectedEndpoint = this.endpoints[2];

  //filter to human task condition
  filterTHT: boolean = false;

  isLoading: boolean = false;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.fetchJsonData();
  }

  changeEndpoint(endpoint) {
    /**
     * Changes the endpoint where the data is going to come from
     */
    this.selectedEndpoint = endpoint;
    this.fetchJsonData();
  }

  fetchJsonData() {
    /**
     * retrieves the data from the server
     */
    this.isLoading = true;
    this._dataService.getList(this.selectedEndpoint.path)
      .subscribe(res => {
        this.completeJson = res;
        //If the option to filter is active, it inmediately filters the information
        if (this.filterTHT) {
          this.filterNodesTHT();
        }
        this.isLoading = false;
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


/**
 * var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));
 */
