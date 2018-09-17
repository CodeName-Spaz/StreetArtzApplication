import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { StreetartzProvider } from '../../providers/streetartz/streetartz'
import { obj } from '../../class';
import { GalleryPage } from '../gallery/gallery';
import firebase from 'firebase';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// declare var firebase;
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {


  obj;
  constructor(public viewCtrl: ViewController,public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams, public art: StreetartzProvider) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ProfilePage');

  // }
  ngOnInit() {
    this.obj = this.navParams.get("obj");
    console.log(this.obj);
  }
  next(){
    this.navCtrl.push(GalleryPage);
    // this.viewCtrl.dismiss();
  }

  // dismiss() {
  //   this.viewCtrl.dismiss();
  // }
}
