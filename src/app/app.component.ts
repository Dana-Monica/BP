import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
  locations = [
    {lat: 45.737107, lng: 21.242326, title: 'Timisoara Judetean'},
    {lat: 46.789598, lng: 23.607691, title: 'Cluj Municipal'},
    {lat: 44.460456, lng: 26.114645, title: 'Bucuresti Colentina'}
  ];
 
  async ngOnInit() {
   }

}