import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/auth.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from './validation';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin: FormGroup; 
  dtOptions: DataTables.Settings = {};
  users: any = [];
  user: any = [];
  constructor(
    public auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {

    this.admin = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.pattern]],
      mobileno: ['', [Validators.required, Validators.pattern]],
      username: ['', [Validators.required]],     
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },{
      validator: MustMatch('password', 'confirmPassword')
    });  

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.getUserList();
  }
  deleteUser(user) {
    document.getElementById("exampleModalCenter1").click();
    console.log(user);
    localStorage.setItem("userToDelete", JSON.stringify(user))
  }
  delUser() {
    const userDel = JSON.parse(localStorage.getItem("userToDelete"))
    console.log(userDel);
    console.log(this.users);
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == userDel.id) {
        console.log("dwqwq");
        this.users.splice(i, 1)

      }
    }
    console.log(this.users);

  }

  getUserList() {
    this.auth.getUserList().subscribe((data: any) => {
      this.users = data.Userdata;
      // this.user.isEdit = false;

    })
  }
  saveUser(user) {

    this.auth.updateUser(user).subscribe((data: any) => {
      if (!data.success) {
      } else {


      }
    })

  }
  get f() { return this.admin.controls; };

}
