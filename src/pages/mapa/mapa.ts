import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SobrePage } from '../sobre/sobre';

declare var google: any;

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class MapaPage {
  map: any;
  image: any;

  constructor(public navCtrl: NavController){
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
    }

    GoogleMaps() {
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {lat: -22.347859, lng: -49.0298399}
      });

      this.image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
/*
      let SedeJunior = new google.maps.Marker({
        position: {lat: -23.34942883, lng: -49.03060699},
        map: this.map,
        //animation: google.maps.Animation.DROP,
        icon: this.image
      });

      SedeJunior.addListener('click', toggleBounce);
      SedeJunior.addListener('click', AbrirJanela);
*/
      var Marcadores = [
        {
          coords: {lat: -21.34942883, lng: -49.03060699},
          content: '<p>Sede da Empresa Jr. de Computação</p>' +
          '<img src="assets/img/8ezqYnKKRFGLxIXQai5a_logo-jr-com.png" style="width:100px; display: block; margin: 0 auto;"/>'
        },
        {
          coords: {lat: -23.34942883, lng: -50.03060699},
          content: '<p>Marcador 2</p>'
        },
        {
          coords: {lat: -23.34942883, lng: -51.03060699},
          content: '<p>Marcador 3</p>'
        }
      ];

      for(var i = 0; i < Marcadores.length; i++) {
        NovoMarcador(Marcadores[i]);
        console.log(i);
        console.log(Marcadores[i].position);
      }

      function NovoMarcador(props) {
        var marcador = new google.maps.Marker ({
          setIcon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          position: props.coords,
          setMap: map,
          animation: google.maps.Animation.DROP
        });
      }

/*
      function toggleBounce() {
        if (SedeJunior.getAnimation() !== null) {
          SedeJunior.setAnimation(null);
        } else {
          SedeJunior.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
*/
  }
}
