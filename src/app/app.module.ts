import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import firebase from 'firebase';

import { SplashPage } from '../pages/splash/splash';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoryPage } from '../pages/category/category';
import { GalleryPage } from '../pages/gallery/gallery';

import { ProfilePage } from '../pages/profile/profile';
import { SignupPage } from '../pages/signup/signup';
import { ContactModalPage } from '../pages/contact-modal/contact-modal';
import { MainPage } from '../pages/main/main';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { StreetartzProvider } from '../providers/streetartz/streetartz';
import { AutohideDirective } from '../directives/autohide/autohide'
import { LoginPage } from '../pages/login/login';
import { HttpClientModule } from '@angular/common/http';
import { UploadImagePage } from '../pages/upload-image/upload-image';




// declare var firebase;

@NgModule({
  declarations: [
    MyApp,
    SplashPage,
    ListPage,
    AutohideDirective,
    CategoryPage,
    GalleryPage,
    LoginPage,
    ProfilePage,
    SignupPage,
    ContactModalPage,
    MainPage,
    PortfolioPage,
    LoginPage,
    SignupPage,
    UploadImagePage
  ],
  imports: [
    BrowserModule, HttpClientModule ,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SplashPage,
    ListPage,
    CategoryPage,
    GalleryPage,
    LoginPage,
    ProfilePage,
    SignupPage,
    ContactModalPage,
    MainPage,
    PortfolioPage,
    LoginPage,
    SignupPage,
    UploadImagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StreetartzProvider,
    
  ]
})
export class AppModule {}
