import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreetartzProvider } from '../../providers/streetartz/streetartz'
import { obj } from '../../class';
import { GalleryPage } from '../gallery/gallery';
import { CategoryPage } from '../category/category';
import { UploadImagePage } from '../upload-image/upload-image';
import { ModalController,ViewController  } from 'ionic-angular';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {


  obj;
  constructor(public navCtrl: NavController, public navParams: NavParams, public art: StreetartzProvider,public modalCtrl: ModalController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ProfilePage');

  // }
  ngOnInit() {
    this.obj = this.navParams.get("obj");
    console.log(this.obj);
  }
  next(){
    this.navCtrl.push(CategoryPage);
  }

  upload(){
    const modal = this.modalCtrl.create(UploadImagePage);
    modal.present();
  }
  
}
