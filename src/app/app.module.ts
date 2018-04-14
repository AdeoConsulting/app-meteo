import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule  } from '@angular/Common/http'; // Importation de HttpClient

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MeteoServiceProvider } from '../services/meteo.service'; // Importation du service meteo

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule , // Ajout de HttpClient aux modules
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MeteoServiceProvider, // Ajout du service Meteo aux providers
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
