import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Node } from '../logic/Node';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  nodes : Array<Node>;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getList('data/3-branching-process')
      .subscribe(res => {this.nodes = res.nodes});
  }

}
