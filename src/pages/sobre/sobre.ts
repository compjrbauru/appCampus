import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { MapaPage } from '../mapa/mapa';
import { HomePage } from '../home/home';
=======
>>>>>>> d874b5b4c32466a20fb07e15940b8c63511b2141

/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  goToMapa(params){
    if (!params) params = {};
    this.navCtrl.push(MapaPage);
  }

=======
>>>>>>> d874b5b4c32466a20fb07e15940b8c63511b2141
  ionViewDidLoad() {
    console.log('ionViewDidLoad SobrePage');
  }

}
