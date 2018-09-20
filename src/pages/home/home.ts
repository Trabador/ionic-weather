import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any;
  units: String;

  geolocationOptions = {
    maximumAge: 0,
    timeOut : 5000,
    enableHighAccuracy: true
  }

  constructor(public navCtrl: NavController, 
              private geolocation: Geolocation,
              private weatherProvider: WeatherProvider,
              private storage: Storage) {

  }

  ionViewWillEnter(){
    this.geolocation.getCurrentPosition(this.geolocationOptions)
      .then(resp => {
        let latitude = resp.coords.latitude.toFixed(0);
        let longitude = resp.coords.longitude.toFixed(0);
        this.callForWeahtherData(latitude, longitude)
          .then(resp => this.data = resp)
      });
  }

  callForWeahtherData(latitude, longitude){
    return this.storage.get('units').then(resp => {
      if(resp != null){
        this.units = resp;
      }
      else{
        this.units = "Metric";
      }
      this.units = this.units.toLocaleLowerCase();
      return this.weatherProvider.getWheater(latitude, longitude, this.units).toPromise()
    });
  }
}
