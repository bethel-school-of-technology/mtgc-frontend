import { Component, OnInit } from '@angular/core';
import { PostdataService } from '../../services/postdata.service';
import { missions } from '../../models/missions'
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-missions-profile',
  templateUrl: './missions-profile.component.html',
  styleUrls: ['./missions-profile.component.scss']
})
export class MissionsProfileComponent implements OnInit {
  mission: any = {};
  isLoggedIn = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }


  // newMission: missions = new missions();
  // UserArr: any = [];
  // constructor(public postDataService: PostdataService) { }


  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorage.getToken();

    if(this.isLoggedIn){
      const user = this.tokenStorage.getUser();
      console.log(user);


    }
      

  }

  addMission() {
    this.authService.regMission(this.mission).subscribe(
      newMission => {
        console.log(newMission);
        this.tokenStorage.getToken();
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    )
    // .createMission(this.newMission)
    // .subscribe(res => {
    //   console.log(this.newMission),
    //     alert('Mission successfully Created!')
    // });

  }

}