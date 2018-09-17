import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  template: `
  <ion-list>
    <ion-item (click)="upload()"><ion-icon start name="add"></ion-icon> Upload Photo</ion-item>
    <ion-item (click)="profile()"><ion-icon start name="person"></ion-icon> Profile</ion-item>
  </ion-list>
  `
})
export class PopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

}
