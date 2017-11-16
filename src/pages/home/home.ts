import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapaPage } from '../mapa/mapa';
import { SobrePage } from '../sobre/sobre'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

<<<<<<< HEAD
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
=======
  goToMapa(params){
    if (!params) params = {};
    this.navCtrl.push(MapaPage);
  }

  goToSobre(params){
    if (!params) params = {};
    this.navCtrl.push(SobrePage);
  }
>>>>>>> d874b5b4c32466a20fb07e15940b8c63511b2141

}
