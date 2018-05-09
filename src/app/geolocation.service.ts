import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'

@Injectable()
export class GeolocationService {

  API_KEY: string;
  API_URL: string;

  constructor(private httpClient: HttpClient) {
    this.API_KEY = 'AIzaSyDQCFQLG-EtcuX-8MX23WGSUvhy-yM4Vto';
    this.API_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${this.API_KEY}&address=`;
  }

  findFromAddress(address: string, postalcode?: string, place?: string, province?: string, region?: string, country?: string): Observable<any> {
    let compositeAddress = [address];

    if (postalcode) compositeAddress.push(postalcode);
    if (place) compositeAddress.push(place);
    if (province) compositeAddress.push(province);
    if (region) compositeAddress.push(region);
    if (country) compositeAddress.push(country);

    let url = `${this.API_URL}${compositeAddress.join(',')}`;

    return this.httpClient.get(url);
  }

}

 

  