import { Component, OnInit } from '@angular/core';
import { missions } from '../../models/missions';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  public missions: missions[];
  private missionsRoute = 'http://localhost:3000/mission_info/missionList'

  constructor(private http: HttpClient) { }


  missionList() {
    this.http.get<missions[]>(this.missionsRoute).subscribe(missions => {
      this.missions = missions
    })
  }
  
  ngOnInit() {
    this.missionList();
  }

}
