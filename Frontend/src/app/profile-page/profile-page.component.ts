import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  profilePage: FormGroup;
  errorMsg: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.profilePage = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
   }

  ngOnInit() {
    this.onSubmit();

  }
  get f() { return this.profilePage.controls; }
  onSubmit(){
    console.log('btn click',this.profilePage.value);
    
}
}
