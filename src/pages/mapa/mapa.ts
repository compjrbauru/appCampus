import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { HomePage } from '../home/home';
import { SobrePage } from '../sobre/sobre';

declare var google;
=======

declare var google: any;
>>>>>>> d874b5b4c32466a20fb07e15940b8c63511b2141

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class MapaPage {
<<<<<<< HEAD
  map: any;
  image: any;

  @ViewChild('mapa') mapaRef: ElementRef;

  constructor(public navCtrl: NavController){
  //),
  //  public NavParams: NavParams) {
    const that = this;
    setTimeout(function () {
      that.GoogleMaps();
    }, 2000)
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
=======

  @ViewChild('mapa') mapaRef: ElementRef;

  constructor(public navCtrl: NavController,
    public NavParams: NavParams) {

>>>>>>> d874b5b4c32466a20fb07e15940b8c63511b2141
    }

    ionViewDidLoad() {
      console.log(this.mapaRef);
<<<<<<< HEAD
//      this.DisplayMap();
    }

      GoogleMaps() {
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: -22.347859, lng: -49.0298399}
      });

      //(-22.347859,-49.0298399);
      this.image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
      let SedeJunior = new google.maps.Marker({
        position: {lat: -22.34942883, lng: -49.03060699},

        map: this.map,
        animation: google.maps.Animation.DROP,
        icon: this.image
      });
      SedeJunior.addListener('click', toggleBounce);

      function toggleBounce() {
        if (SedeJunior.getAnimation() !== null) {
          SedeJunior.setAnimation(null);
        } else {
          SedeJunior.setAnimation(google.maps.Animation.BOUNCE);
        }
      }

      //const mapa = new google.maps.Map(this.mapaRef.nativeElement, options);
=======
      this.DisplayMap();
    }

    DisplayMap() {
      const location = new google.maps.LatLng(-22.347859,-49.0298399);

      const options = {
        center: location,
        zoom: 18
      };

      const mapa = new google.maps.Map(this.mapaRef.nativeElement, options);
>>>>>>> d874b5b4c32466a20fb07e15940b8c63511b2141
    }

}
