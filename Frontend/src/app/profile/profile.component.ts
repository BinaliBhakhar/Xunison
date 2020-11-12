import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from './validation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: FormGroup; 
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.profile = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.pattern]],
      mobileno: ['', [Validators.required, Validators.pattern]],
      country: ['', [Validators.required]],
      username: ['', [Validators.required]],     
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },{
      validator: MustMatch('password', 'confirmPassword')
    });  
  }
  get f() { return this.profile.controls; };
}
