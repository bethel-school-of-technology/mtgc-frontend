import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
title = 'Registration Page';
  signupPath: string = 'http://localhost:3000/users/signup';
  constructor() { }

  ngOnInit(): void {
  }

}
