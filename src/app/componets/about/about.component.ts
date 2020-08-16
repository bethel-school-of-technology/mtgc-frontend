import { Component, OnInit } from '@angular/core';
import { PostdataService } from '../../services/postdata.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  MissionList: any = [];
  
  

  ngOnInit() {
    this.missionList();
  }

  constructor(
    public postdataService: PostdataService
  ) { }


  
  missionList(){
    return this.postdataService.missionList().subscribe((missionList: {})=>{
      this.MissionList = missionList;
    })
  }
}
