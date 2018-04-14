import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MeteoServiceProvider } from '../../services/meteo.service';
import { Meteo } from '../../models/meteo.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  meteo: Meteo;
  ville: string;

  constructor(public navCtrl: NavController,
              private meteoService: MeteoServiceProvider // ajout du service meteo
            ) {

    this.ville = '';
  }


  getMeteoVille(){
    this.meteoService.getMeteo(this.ville).then((resultat) => {
      this.meteo = resultat;
    }).catch((erreur) => {
      console.log(erreur);
    })
  }

}
