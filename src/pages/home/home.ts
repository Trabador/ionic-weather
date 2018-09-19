import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any;

  geolocationOptions = {
    maximumAge: 0,
    timeOut : 5000,
    enableHighAccuracy: true
  }

  constructor(public navCtrl: NavController, 
              private geolocation: Geolocation,
              private weatherProvider: WeatherProvider) {

  }

  ionViewWillEnter(){
    this.geolocation.getCurrentPosition()
      .then(resp => {
        let latitude = resp.coords.latitude.toFixed(0);
        let longitude = resp.coords.longitude.toFixed(0);
        console.log(latitude+' '+longitude);
        this.weatherProvider.getWheater(latitude, longitude)
          .subscribe(resp => {
            console.log(resp);
            this.data = resp;
          });
      });
  }

}
