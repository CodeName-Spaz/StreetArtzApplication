import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { StreetartzProvider } from '../../providers/streetartz/streetartz';
import { GalleryPage } from '../gallery/gallery';
/**
 * Generated class for the UploadImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload-image',
  templateUrl: 'upload-image.html',
})
export class UploadImagePage {
  url;
  name;
  category;
  picDesc;
  constructor(public navCtrl: NavController, public navParams: NavParams,public firebaseService: StreetartzProvider) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadModalPage');
  }
 
  insertvid(event:any){
 
    if (event.target.files && event.target.files[0]){
      let reader = new FileReader();
 
      reader.onload = (event:any) =>{
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
 
    }
  }
 
  uploadPicture(){
    this.firebaseService.uploadPic(this.url,this.name).then(data =>{
      console.log(data);
       this.firebaseService.storeToDB(data, this.category, this.name).then(() =>{
         console.log('added to db');
         this.navCtrl.setRoot(GalleryPage);
       },
      Error =>{
        console.log(Error)
      })
    }, Error =>{
      console.log(Error )
    })
}
}