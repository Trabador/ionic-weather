import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage }  from '@ionic/storage';


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  unitsSelected: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private storage: Storage) {
    this.unitsSelected = "Metric"
  }

  ionViewWillEnter() {
    this.storage.get('units').then(resp => {
      if(resp != null){
        this.unitsSelected = resp;
      }
      else{
        this.unitsSelected = "Metric"
      }
    });
  }

  saveUnits(){
    this.storage.set('units', this.unitsSelected);
  }

}
