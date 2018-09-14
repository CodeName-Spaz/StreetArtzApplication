import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PortfolioPage } from '../portfolio/portfolio';
import { MainPage } from '../main/main';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  nextpage(){
    this.navCtrl.push(PortfolioPage);
  }
  searchPage(){
  console.log("clicked search");
  
  this.navCtrl.push(MainPage);
}
}
