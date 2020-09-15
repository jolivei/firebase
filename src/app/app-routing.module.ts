import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './component/login/login.component'
import {CartaListaComponent} from './component/carta-lista/carta-lista.component'
import {CartaFormComponent} from './component/carta-form/carta-form.component'
import {CartaListaClientesComponent} from './component/carta-lista-clientes/carta-lista-clientes.component'
import {InicioComponent} from './component/inicio/inicio.component'
import {BodegaComponent} from './component/bodega/bodega.component'

const routes: Routes = [{ path: 'login', component: LoginComponent },
{
  path:'cartalista', component: CartaListaComponent
},
{ path:'cartaform', component: CartaFormComponent},
{path:'carta', component:CartaListaClientesComponent
},
//{path:'', redirectTo:'inicio', pathMatch:'full'},
{path:'', redirectTo:'login', pathMatch:'full'},
{path:'inicio', component:InicioComponent},
{path:'bodega', component:BodegaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
