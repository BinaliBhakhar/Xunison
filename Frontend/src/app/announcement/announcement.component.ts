import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  announcement: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {

    this.announcement = this.formBuilder.group({
      title: ['', [Validators.required]],
      msg: ['', [Validators.required]],
      image: ['', [Validators.required]],
      status: ['', [Validators.required]],     
    });

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
  get f() { return this.announcement.controls; };

}
