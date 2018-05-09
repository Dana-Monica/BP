import { Component,OnInit } from '@angular/core';
import { HttpModule, Http, Headers  } from '@angular/http';
import { SharedInfoComponent } from './shared-info/shared-info.component';
import { Observable } from 'rxjs/Observable';
import { GeolocationService } from "./geolocation.service";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items = [];
  infoWindowOpened = null;
  constructor(public http: Http,private geocodingService: GeolocationService) {
    
  }
  ngOnInit() {
    this.http.get('http://localhost:8078/locatii')
    .subscribe(
      response => {
        let answear = response.json();
        SharedInfoComponent.items = answear;
        console.log(SharedInfoComponent.items);
        this.items = answear;        
      },
      error => {
        alert(error.text());
        console.log(error.text());
      }
    );
  }


  showInfoWindow(infoWindow,index) {
    if( this.infoWindowOpened ===  infoWindow)
    return;
    
  if(this.infoWindowOpened !== null)
    this.infoWindowOpened.close();
    
  this.infoWindowOpened = infoWindow;
   }

Add(adresa,nume){
  this.geocodingService
  .findFromAddress(adresa.valueOf())
  .subscribe(response => {
    if (response.status == 'OK') {
       let latt = response.results[0].geometry.location.lat;
       let lngg = response.results[0].geometry.location.lng; // plus adresa care e parametru

       let body = JSON.stringify({latt,lngg,adresa,nume});
       let headers = new Headers();
       headers.append('Content-Type','application/json');
   
       this.http.post('http://localhost:8078/locatiiadd', body, {headers})
         .subscribe(
           response => {
             console.log("Hello!");
             let elem = { 
                         "lat":parseFloat(latt),
                         "lng":parseFloat(lngg),
                         "title":nume,
                         "adresa":adresa
                       };
                       console.log(elem.title + "in type script");
             this.items.push(elem);
             console.log(this.items);
           },
           error => {
             console.log(error.text());
           }
         );
    } else if ( response.status == 'ZERO_RESULTS') {
      console.log('geocodingService', 'ZERO_RESULTS', response.status)
    }
    else {
      console.log('geocodingService', 'Other error', response.status);
    }
  });
  }

  
}