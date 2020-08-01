import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../../models/users'
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  private userRoute = 'http://localhost:3000/users/profile';
  public users: Users[];
  constructor(private http: HttpClient) { }
  getUsers() {
    this.http.get<Users[]>(this.userRoute).subscribe(users => {
        this.users = users;
        console.log('Users', this.users);
      });
    }    
  ngOnInit() {
    this.getUsers();
  }
}
