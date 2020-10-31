import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
