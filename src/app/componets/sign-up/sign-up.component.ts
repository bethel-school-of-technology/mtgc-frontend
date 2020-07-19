import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
title = 'Registration Page';
  loginPath: string = 'http://localhost:3000/users/signup';
  constructor() { }

  ngOnInit(): void {
  }

}
