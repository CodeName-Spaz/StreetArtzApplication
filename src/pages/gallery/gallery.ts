import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { obj } from '../../class';
import { StreetartzProvider } from '../../providers/streetartz/streetartz';
import { ProfilePage } from '../profile/profile';
import arr from '../../class';
import { ModalController,ViewController  } from 'ionic-angular';
import { UploadImagePage } from '../upload-image/upload-image';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  obj = {} as obj
  arr = [];
  uid:any;
  list=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public art: StreetartzProvider,public modalCtrl: ModalController,public viewCtrl: ViewController,public loadingCtrl: LoadingController,public toastCtrl: ToastController) {
    this.retreivePics();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }
 
 upload(){
    const modal = this.modalCtrl.create(UploadImagePage);
    modal.present();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  getUid(){
    this.art.getUserID().then(data =>{
      this.uid = data
    })
  }

  retreivePics(){
    this.getUid();
    this.art.viewPicGallery().then(data =>{
      var loader = this.loadingCtrl.create({
        content: "please wait...",
        duration: 6000
      });
      var keys: any = Object.keys(data);
      for (var i = 0; i < keys.length; i++){
            var k = keys[i];
            if( this.uid == data[k].uid ){
              let obj = {
                uid:data[k].uid ,
                category: data[k].category ,
                downloadurl:data[k].downloadurl ,
                name:data[k].name ,
                key:k
              }
              this.list.push(obj);
            }
          }
          loader.dismiss();
       }, Error =>{
        console.log(Error)
    });
  }
  remove(key){
    var loader = this.loadingCtrl.create({
      content: "please wait...",
      duration: 3000
    });
 
    this.art.deletePicture(key).then(authData => {
      loader.dismiss();
      this.list = undefined;
    }, err =>{
      loader.dismiss();
      let toast = this.toastCtrl.create({
        message: err,
        duration: 300,
        position: 'top'
      });
      toast.present();
    });
  }
}
