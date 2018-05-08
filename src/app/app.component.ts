import { Component,OnInit } from '@angular/core';
import { HttpModule, Http, Headers  } from '@angular/http';
import { SharedInfoComponent } from './shared-info/shared-info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items = [];
  infoWindowOpened = null;
  constructor(public http: Http) {
    
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

Add(lat,lng,name){
    let body = JSON.stringify({lat,lng,name});
    console.log(body+" add in typescript");
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    this.http.post('http://localhost:8078/locatiiadd', body, {headers})
      .subscribe(
        response => {
          console.log("Hello!");
          let elem = { 
                      "lat":parseFloat(lat),
                      "lng":parseFloat(lng),
                      "title":name
                    };
                    console.log(elem);
          this.items.push(elem);
        },
        error => {
          console.log(error.text());
        }
      );
  }
}