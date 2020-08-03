import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Users } from '../../models/users';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
private adminRoute = 'http://localhost:3000/users/admin';
public users: Users[];

  constructor(private http:HttpClient) { }

  getUsers(){
    this.http.get<Users[]>(this.adminRoute).subscribe(users => {
      this.users = users;
    });
  }
  ngOnInit(): void {
    this.getUsers();
  }

}
