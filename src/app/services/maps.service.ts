import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location {
  latitude: string;
  longitude: string;
}

interface Markers {
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

  missionsLocation(){
    return this.http.get<Markers>('https://maps.googleapis.com/maps/api/geocode/json?address=Puerto+Plata+57000,+Dominican+Republic;Ole+Sangale+Road,+Nairobi+City,+Kenya;5+Bentley+Court,+Somerdale,+NJ;101+E+Oregon+street,+Kalispell,MT;1600+Amphitheatre+Parkway,+Mountain+View,+CA;8313+Muirwood+Trail,+Fort+Worth,TX;16031+Deblin+Square,+Hammond,+LA&key=AIzaSyCyq9CtZmKymMGxQOsgmoGPxgREjLuCR7c')
  }
}
