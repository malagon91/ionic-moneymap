import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class GeolocationServiceProvider {
    constructor(private geolocation: Geolocation) {}
  get(){
    return this.geolocation.getCurrentPosition();
  }
}
