import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { users } from '../models/users';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { TokenStorageService } from './token-storage.service';
import { missions } from '../models/missions';

@Injectable({
  providedIn: 'root'
})

export class PostdataService {

  // Base url
  baseurl = 'http://localhost:3000';

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getPublicContent(): Observable<any> {
    return this.http.get(this.baseurl + '/users/all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(this.baseurl + '/users/user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(this.baseurl + '/users/mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.baseurl + '/users/admin', { responseType: 'text' });
  }
  
  // GET
  GetUser(id): Observable<users> {
    return this.http.get<users>(this.baseurl + '/users/profile/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // GET
  GetUsers(): Observable<users> {
    return this.http.get<users>(this.baseurl + '/users/profile')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  //GET ADMIN
  GetAdmin(): Observable<users> {
    return this.http.get<users>(this.baseurl + '/users/admin/', { headers: { authorization: this.tokenStorage.getToken() } })
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  GetMissions(): Observable<missions[]> {
    return this.http.get<missions[]>(this.baseurl + '/mission_info/missionList')
    .pipe(
      retry(1), 
      catchError(this.errorHandl)
    )
  }

  // PUT
  UpdateUsers(id, data): Observable<users> {
    return this.http.put<users>(this.baseurl + '/users/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // DELETE
  DeleteUsers(id){
    return this.http.delete<users>(this.baseurl + '/users/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // Error handling
  errorHandl(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     alert(errorMessage);
     console.log(errorMessage);
     return throwError(errorMessage);
  }

  createMission(mission_info: missions): Observable<missions> {
    return this.http.post<missions>(this.baseurl + '/mission_info/mission_signup/', JSON.stringify(mission_info), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  } 


  missionList(): Observable<missions>{
    return this.http.get<missions>(this.baseurl + '/mission_info/missionList')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }
}