import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { missions } from '../models/missions';

const AUTH_API = 'http://localhost:3000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  login(credentials): Observable<any> {
    return this.http.post<any>(AUTH_API + '/users/signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post<any>(AUTH_API + '/users/signup', {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
      password: user.password,
      missionary: user.missionary,
      phoneNumber: user.phoneNumber,
      bio: user.bio

    }, httpOptions);
  }

  regMission(mission): Observable<any> {
    return this.http.post<any>(AUTH_API + '/mission_info/mission_signup/', {

      organizationName: mission.organizationName,
      organizationStreetAddress: mission.organizationStreetAddress,
      city: mission.city,
      state: mission.state,
      zip: mission.zip,
      organizationCountry: mission.organizationCountry,
      missionLocationCity: mission.missionLocationCity,
      missionLocationCountry: mission.missionLocationCountry,
      image: mission.image,
      bio: mission.bio,
      lat: mission.lat,
      lng: mission.lng,

    }, { headers: { authorization: this.tokenStorage.getToken() } });
  }

  // missionList(mission): Observable<missions> {
  //   return this.http.get<missions>(AUTH_API + '/mission_info/missionList', {
  //   })
  // }
}