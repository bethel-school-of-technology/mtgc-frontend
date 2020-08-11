import { Component, OnInit } from '@angular/core';
import { PostdataService } from '../../postdata.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  Userlist: any = [];


  ngOnInit() {
    this.loadUser();
  }

  constructor(
    public postdataService: PostdataService
  ){ }

   // Users list
   loadUser() {
    return this.postdataService.GetUsers().subscribe((data: {}) => {
      this.Userlist = data;
    
    })
  }
}