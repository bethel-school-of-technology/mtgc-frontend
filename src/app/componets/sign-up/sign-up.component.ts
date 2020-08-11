import { Component, OnInit } from '@angular/core';
import { PostdataService } from '../../postdata.service';


@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  UserArr: any = [];
  constructor(public postdataService: PostdataService) { }

  ngOnInit() {
    this.addUser()
  }
  addUser() {
    ({
      firstName: [''],
      lastName: [''],
      phoneNumber: [''],
      userName: [''],
      email: [''],
      password: [''],
      bio: [ '']
    })
  }

 submitForm(){
  this.postdataService.CreateUser(this.addUser).subscribe(res => {
    console.log('user added!')
 });
 }
}