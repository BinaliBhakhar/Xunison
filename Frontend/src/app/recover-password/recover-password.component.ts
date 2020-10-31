import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  recoverPassword: FormGroup;
  errorMsg: string;
  constructor( 
    private formBuilder: FormBuilder,
    private router: Router) {
      this.recoverPassword = this.formBuilder.group({
        emailAddress: ['', [Validators.required, Validators.email]],
        
      });
     }

  ngOnInit() {
  }
  get f() { return this.recoverPassword.controls; }
  onSubmit(){
    console.log('btn click',this.recoverPassword.value);
    
}
}
