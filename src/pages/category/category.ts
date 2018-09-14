import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PortfolioPage } from '../portfolio/portfolio';
import { MainPage } from '../main/main';
import {obj} from '../../class';
import {select} from '../../class';
import { StreetartzProvider } from '../../providers/streetartz/streetartz';
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
obj = {} as obj
select = {} as select
category;
arr2 =[];
uid:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public art: StreetartzProvider) {

    console.log(this.category);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  nextpage(){
    this.navCtrl.push(PortfolioPage);
  }
next(){
  this.navCtrl.push(MainPage);
}

typeOfArt(){
  this.art.selectCategory(this.category).then((data)=>{
    // this.arr2.push(data);
    // console.log(this.arr2);
    var keys: any = Object.keys(data);
    for (var i = 0; i < keys.length; i++){
          var k = keys[i];
          if( this.category == data[k].category ){
            let obj = {
              category: data[k].category,
              downloadurl:data[k].downloadurl,
              name:data[k].name,
              key:k
            }
            this.arr2.push(obj);
            console.log(this.arr2);
          }
        }
  })
}

}
