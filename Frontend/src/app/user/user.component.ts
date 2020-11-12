import { Component, OnInit } from '@angular/core';
// import { asapScheduler } from 'rxjs';
import { AuthService } from "../shared/auth.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from "./validation";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  User: FormGroup;
  Users: FormGroup;
  dtOptions: DataTables.Settings = {};
  users: any = [];
  user: any = [];
  newUser: any;
  id: number;
  fullName: string;
  companyName: string;
  email: string;
  phoneNo: string;
  userName: string;
  appAdded: string;
  createdOn: Date;
  constructor(
    public auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }


  ngOnInit() {

    this.User = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      companyname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern]],
      mobileno: ['', [Validators.required, Validators.pattern]],
      username: ['', [Validators.required]],
      appadded: ['', [Validators.required]],
      createdon: ['', [Validators.required]],

    });
    this.Users = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern]],
      mobileno: ['', [Validators.required, Validators.pattern]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.getUserList();
    this.newUser = {
      id: '',
      fullName: '',
      companyName: '',
      email: '',
      phoneNo: '',
      userName: '',
      appAdded: '',
      createdOn: ''
    }
  }
  updateUser(newUser) {
    // this.users.push(this.newUser)
    console.log(newUser);
    // addUser(new) {
    this.auth.addUser(newUser).subscribe((data: any) => {
      // this.users = data.Userdata;
      // this.user.isEdit = false;
      console.log(data.Userdata);

    })
    // }
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
      this.auth.deleteUser().subscribe((data: any) => {
        console.log(data.Userdata);
      })
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
  get f() { return this.User.controls; };
  get s() { return this.Users.controls; };

}
