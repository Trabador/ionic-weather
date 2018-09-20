import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroment/enviroment';
import 'rxjs/add/operator/map';
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

  
  getWheater(latitude, longitude, units){
      return this.http.get(enviroment.weatherAPIUrl+'lat='+latitude+'&lon='+longitude
                            +'&units='+units+'&appid='+enviroment.weatherAPIKey);
  }


}
