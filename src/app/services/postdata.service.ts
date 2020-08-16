import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { users } from '../models/users';
import { missions } from '../models/missions'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PostdataService {

  // Base url
  baseurl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // POST
  CreateUser(user: users): Observable<users> {
    return this.http.post<users>(this.baseurl + '/users/signup/', JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
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
    return this.http.get<users>(this.baseurl + '/users/admin/')
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
       errorMessage = `Error Code: ${error.status}Message: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }

  // mission handling

  // mission create
  
  createMission(mission_info: missions): Observable<missions> {
    return this.http.post<missions>(this.baseurl + '/mission_info/mission_signup/', JSON.stringify(mission_info), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  } 

  //list all missions
  missionList(): Observable<missions>{
    return this.http.get<missions>(this.baseurl + '/mission_info/missionList')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }
}