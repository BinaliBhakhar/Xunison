import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './validation';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  reset: FormGroup;
  errorMsg: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.reset = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],

    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
  }

  ngOnInit() {

   
    this.onSubmit();

  }
  get f() { return this.reset.controls; }
  onSubmit() {
    console.log('btn click', this.reset.value);

  }
}
