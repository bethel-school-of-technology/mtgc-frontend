import { Component, OnInit } from '@angular/core';
import { PostdataService } from '../../services/postdata.service';
import { users } from '../../models/users';


@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  newUser: users = new users();
  UserArr: any = [];
  constructor(public postdataService: PostdataService) { }

  ngOnInit() {
  }
  
  addUser(){
    this.postdataService
    .CreateUser(this.newUser)
    .subscribe(res=>{
      alert('Account successfully Created!')
    });

  }

}