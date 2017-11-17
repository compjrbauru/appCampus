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
        zoom: 17,
        center: {
          lat: -22.347859,
          lng: -49.0298399
        }
      });

      this.image = 'assets/icon/jr-com-icon.png';
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


      var marcadores = [
        [-22.349417, -49.030580, '<p>Jr.com - Empresa Júnior de Computação</p><img src="assets/img/8ezqYnKKRFGLxIXQai5a_logo-jr-com.png" style="width: 100px; display: block; margin: 0 auto;"/>'],
        [-23.34942883, -50.03060699, '<p>Marcador 2</p>'],
        [-23.34942883, -51.03060699, '<p>Marcador 3</p>']
      ];

      var janela = new google.maps.InfoWindow({
        maxHeigth: 450,
        maxWidth: 630
      });

      for(var i = 0; i < marcadores.length; i++) {
        var marcador = new google.maps.Marker({
          position: new google.maps.LatLng(marcadores[i][0], marcadores[i][1]),
          map: this.map,
          animation: google.maps.Animation.DROP,
          icon: this.image
        });

        google.maps.event.addListener(marcador, 'click', (function(marcador, i) {
          return function() {
            janela.setContent(marcadores[i][2]);
            janela.open(this.map, marcador);
          }
        })
        (marcador, i) )
      }

/*
      function NovoMarcador(props) {
        var marcador = new google.maps.Marker ({
          setIcon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          position: props.coords,
          setMap: map,
          animation: google.maps.Animation.DROP
        });
      }
*/

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
