import { Component, OnInit } from '@angular/core';
import { PostdataService } from '../../services/postdata.service';
import { missions } from '../../models/missions'

@Component({
  selector: 'app-missions-profile',
  templateUrl: './missions-profile.component.html',
  styleUrls: ['./missions-profile.component.scss']
})
export class MissionsProfileComponent implements OnInit {

  newMission: missions= new missions();
  UserArr: any = [];
  constructor(public postdataService: PostdataService) { }


  ngOnInit(): void {
  }

  addUser(){
    this.postdataService
    .createMission(this.newMission)
    .subscribe(res=>{
      alert('Mission successfully Created!')
    });

  }

}
