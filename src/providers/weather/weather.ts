import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroment/enviroment';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }

  
  getWheater(latitude, longitude){
    /*this.geolocation.getCurrentPosition()
      .then((resp) => {
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
        let latitude = resp.coords.latitude;
        let longitude = resp.coords.longitude;
        
      }).catch(error => {
        console.log("Error ocurred "+error);
      });*/
      //return this.http.get(enviroment.weatherAPIUrl);
      return this.http.get(enviroment.weatherAPIUrl+'lat='+latitude+'&lon='+longitude+'&appid='+enviroment.weatherAPIKey);
  }


}
