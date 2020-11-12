import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  support: FormGroup; 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.support = this.formBuilder.group({
      companyname: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.pattern]],
      mobileno: ['', [Validators.required, Validators.pattern]],
      subject: ['', [Validators.required]],
      shortdes: ['', [Validators.required]],     
      fileattach: ['', [Validators.required]],
    });
  }
  get f() { return this.support.controls; };

}
