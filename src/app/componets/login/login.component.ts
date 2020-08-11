import { Component, OnInit } from '@angular/core';
import { users } from '../../models/users'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: users = new users();
  constructor() { }

  ngOnInit(): void {
  }

}
