import { Component, OnInit } from '@angular/core';
import { MapsService } from '../../maps.service'
import { MapCardComponent } from '../map-card/map-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  lat: string ='';
  lng: string ='';
 
  location: object;
  
  constructor(private map: MapsService) {}

  ngOnInit() {
    this.map.userLocation().subscribe(data =>{
    console.log(data);
    this.lat = data.latitude;
    this.lng = data.longitude;  
    })
    
  }
  
}
