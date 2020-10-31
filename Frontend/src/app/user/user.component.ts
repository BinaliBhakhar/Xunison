import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
