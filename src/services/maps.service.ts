import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location {
  latitude: string;
  longitude: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  userLocation(){
    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=24ae37244c9461ee92444e0003593ef3')
  }
}
