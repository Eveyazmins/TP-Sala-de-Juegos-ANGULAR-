import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from './componentes/login/login.component';
//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

// import { AccordionModule } from 'ngx-bootstrap';
// agrego las clases para utilizar ruteo
import { RouterModule, Routes } from '@angular/router';

import { MiHttpService } from './servicios/mi-http/mi-http.service'; 
import { PaisesService } from './servicios/paises.service'; 

import { JugadoresService } from './servicios/jugadores.service'; 
import{ ArchivosJugadoresService} from './servicios/archivos-jugadores.service'; 
import { ErrorComponent } from './componentes/error/error.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AdivinaMasListadoComponent } from './componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from './componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { RuteandoModule } from './ruteando/ruteando.module';
import { ListadoComponent } from './componentes/listado/listado.component';
// declaro donde quiero que se dirija
/*
const MiRuteo = [{path: 'error' , component: ErrorComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
{path: 'Adivina' , component: AdivinaElNumeroComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: '' , component: LoginComponent , pathMatch: 'full'},

{path: '**' , component: ErrorComponent} ];
*/
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';

import { JuegoServiceService } from './servicios/juego-service.service';
import { ListadosComponent } from './componentes/listados/listados.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { ListadoDePaisesComponent } from './componentes/listado-de-paises/listado-de-paises.component';
import { MapaDeGoogleComponent } from './componentes/mapa-de-google/mapa-de-google.component'
import { AgmCoreModule } from '@agm/core';
import { InputJugadoresComponent } from './componentes/input-jugadores/input-jugadores.component';
import { SexoPipe } from './pipes/sexo.pipe';
import { from } from 'rxjs';
import { MenuJuegosComponent } from './componentes/menu-juegos/menu-juegos.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { PiedraPapelTijeraMasListadoComponent } from './componentes/piedra-papel-tijera-mas-listado/piedra-papel-tijera-mas-listado.component';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { AnagramaMasListadoComponent } from './componentes/anagrama-mas-listado/anagrama-mas-listado.component';
import { TatetiMasListadoComponent } from './componentes/tateti-mas-listado/tateti-mas-listado.component';
import { JuegoSonidoComponent } from './componentes/juego-sonido/juego-sonido.component';
import { JuegoSonidoMasListadoComponent } from './componentes/juego-sonido-mas-listado/juego-sonido-mas-listado.component';

import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './servicios/auth.service';
import { environment } from '../environments/environment.prod';
import {firebaseConfig} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    MenuComponent,
    AdivinaMasListadoComponent,
    AgilidadMasListadoComponent,
    ListadoComponent,
    ListadosComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    ListadoDePaisesComponent,
    MapaDeGoogleComponent,
    JugadoresListadoComponent,
    InputJugadoresComponent,
    SexoPipe,
    MenuJuegosComponent,
    PiedraPapelTijeraComponent,
    PiedraPapelTijeraMasListadoComponent,
    TatetiComponent,
    AnagramaMasListadoComponent,
    TatetiMasListadoComponent,
    JuegoSonidoComponent,
    JuegoSonidoMasListadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RuteandoModule,
    //AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
    })
    // NgbModule.forRoot(MiRuteo),
    // importo el ruteo
    // RouterModule.forRoot(MiRuteo)
  ],
  providers: [ JuegoServiceService, MiHttpService,PaisesService,ArchivosJugadoresService,JugadoresService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
