import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
