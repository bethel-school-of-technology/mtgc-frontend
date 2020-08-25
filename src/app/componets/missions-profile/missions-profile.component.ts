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
  imageFile: File;
  blobFile: any;
  base64File: any;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }


  // newMission: missions = new missions();
  // UserArr: any = [];
  // constructor(public postDataService: PostdataService) { }


  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorage.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      console.log(user);


    }
  }
  fileChanged(event) {
    this.imageFile = event.target.files[0];
  }

  changeFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader;
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      }
      reader.onerror = error => {
        reject(error);
      }
    })
  }
  addMission() {
    console.log(this.imageFile);
    const type = this.imageFile.type;
    this.changeFile(this.imageFile).then((base64: string): any => {
      console.log(base64);
      this.base64File = base64;
      fetch(base64).then(res => res.blob()).then(blob => {
        console.log(blob);
        let reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          let base64data = reader.result;
          console.log(base64data)
        }
      })
    })
    this.authService.regMission(this.mission).subscribe(
      newMission => {
        this.tokenStorage.getToken();
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        console.log(newMission);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    )

  }

}