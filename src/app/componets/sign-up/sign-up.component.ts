import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
title = 'Registration Page';
  signupPath: string = 'http://localhost:3001/users/signup';
  constructor() { }

  ngOnInit(): void {
  }

}
