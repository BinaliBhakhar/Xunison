import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  notification: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {

    this.notification = this.formBuilder.group({
      title: ['', [Validators.required]],
      msg: ['', [Validators.required]],
      image: ['', [Validators.required]],
      link: ['', [Validators.required]],     
    });

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
  get f() { return this.notification.controls; };

}
