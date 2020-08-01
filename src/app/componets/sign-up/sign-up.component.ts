import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: Users = new Users();
title = 'Registration Page';
  signupPath: string = 'http://localhost:3000/users/signup';
  constructor() { }

  ngOnInit(): void {
  }
 onSubmit(){
   console.log('Submit successful: ', this.user);
 }
}
