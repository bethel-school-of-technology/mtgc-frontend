import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MapsService } from 'src/app/maps.service';

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
