import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MapaPage } from '../pages/mapa/mapa';
import { HomePage } from '../pages/home/home';
import { SobrePage } from '../pages/sobre/sobre';

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

  goToHome(params) {
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
  goToSobre(params) {
    if (!params) params = {};
    this.navCtrl.push(SobrePage);
  }
  goToMapa(params){
    if (!params) params = {};
    this.navCtrl.push(MapaPage);
  }
  
}
