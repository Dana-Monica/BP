import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  infoWindowOpened = null;
  lat: number = 51.678418;
  lng: number = 7.809007;
  locations = [
    {lat: 45.737107, lng: 21.242326, title: 'Timisoara Judetean'},
    {lat: 46.789598, lng: 23.607691, title: 'Cluj Municipal'},
    {lat: 44.460456, lng: 26.114645, title: 'Bucuresti Colentina'}
  ];
 
  async ngOnInit() {
   }

   showInfoWindow(infoWindow,index) {
    if( this.infoWindowOpened ===  infoWindow)
    return;
    
  if(this.infoWindowOpened !== null)
    this.infoWindowOpened.close();
    
  this.infoWindowOpened = infoWindow;
   }
}