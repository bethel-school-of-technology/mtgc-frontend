import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { missions } from '../../models/missions';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
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
