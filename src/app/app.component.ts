import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MapaPage } from '../pages/mapa/mapa';
<<<<<<< HEAD
import { HomePage } from '../pages/home/home';
import { SobrePage } from '../pages/sobre/sobre';
=======


import { HomePage } from '../pages/home/home';


>>>>>>> d874b5b4c32466a20fb07e15940b8c63511b2141

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
<<<<<<< HEAD

  goToHome(params) {
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
  goToSobre(params) {
    if (!params) params = {};
    this.navCtrl.push(SobrePage);
  }
=======
>>>>>>> d874b5b4c32466a20fb07e15940b8c63511b2141
  goToMapa(params){
    if (!params) params = {};
    this.navCtrl.push(MapaPage);
  }
<<<<<<< HEAD


=======
  
>>>>>>> d874b5b4c32466a20fb07e15940b8c63511b2141
}
