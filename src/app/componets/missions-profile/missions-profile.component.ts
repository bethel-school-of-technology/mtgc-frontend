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
  constructor(public postDataService: PostdataService) { }


  ngOnInit(): void {
  }

  addMission(){
    this.postDataService
    .createMission(this.newMission)
    .subscribe(res=>{
      console.log(this.newMission),
      alert('Mission successfully Created!')
    });

  }

}