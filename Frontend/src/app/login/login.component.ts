import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  errorMsg: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    )  { 
      this.login = this.formBuilder.group({
        UserName: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        rememberMe: [false]

      });
    }

  ngOnInit() {
    this.onSubmit();

  }
  get f() { return this.login.controls; }
  onSubmit(){
    console.log('btn click',this.login.value);
    
}
}
