import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.css']
})
export class AddAppComponent implements OnInit {
  addApp: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.addApp = this.formBuilder.group({
      appname: ['', [Validators.required]],
      apppackagename: ['', [Validators.required]],
      appicon: ['', [Validators.required]],      
    });
  }
  get f() { return this.addApp.controls; };

}
