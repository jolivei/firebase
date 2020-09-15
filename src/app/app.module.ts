import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//material
import {MatSelectModule} from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
//scrollreveal
import {NgsRevealModule} from 'ngx-scrollreveal';
//router
import {RouterModule} from '@angular/router';

//services
//import {AuthService} from './services/firebase/auth.service'
import {AuthService} from './services/firebase/auth.service'
//firebase
import {AngularFirestoreModule} from '@angular/fire/firestore'
import {AngularFireModule} from '@angular/fire'
import {AngularFireAuthModule} from '@angular/fire/auth'
import {environment}  from '../environments/environment'
//forms
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
//compo
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';

import { CartaListaComponent } from './component/carta-lista/carta-lista.component';
import { CartaFormComponent } from './component/carta-form/carta-form.component';
import { NavbarLoginComponent } from './component/navbar-login/navbar-login.component';
import { CartaListaClientesComponent } from './component/carta-lista-clientes/carta-lista-clientes.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { BodegaComponent } from './component/bodega/bodega.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CartaListaComponent,
    CartaFormComponent,
    NavbarLoginComponent,
    CartaListaClientesComponent,
    InicioComponent,
    BodegaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSliderModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgsRevealModule,
    //RouterModule.forRoot(routes,)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
