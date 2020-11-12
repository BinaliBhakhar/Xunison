import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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
      email: ['', [Validators.required, Validators.pattern]],
      VUMsg: ['', [Validators.required]],
      VCode: ['', [Validators.required]],
      VName: ['', [Validators.required]],
      PSURL: ['', [Validators.required]],
      APKURL: ['', [Validators.required]],
      PName: ['', [Validators.required]],
      PPURL: ['', [Validators.required]],
      SMsg: ['', [Validators.required]],
      OSAID: ['', [Validators.required]],
      OSRKey: ['', [Validators.required]],
      OSGPNo: ['', [Validators.required]],
      AName: ['', [Validators.required]],
      DevelopBy: ['', [Validators.required]],
      SId: ['', [Validators.required]],
      TNo: ['', [Validators.required]],
      Wno: ['', [Validators.required]],
      Website: ['', [Validators.required]],
      SkypeId: ['', [Validators.required]],
      TeleNo: ['', [Validators.required]],
      WANo: ['', [Validators.required]],
      appname: ['', [Validators.required]],
      apppackagename: ['', [Validators.required]],
      appicon: ['', [Validators.required]], 

    });

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
  get f() { return this.notification.controls; };

}
