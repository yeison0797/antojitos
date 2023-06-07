import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Pagina1Component } from './components/productos/pagina1.component';
import { Pagina2Component } from './components/carrito/pagina2.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

//Rutas de navegación
const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: Pagina1Component },
  { path: 'ventas', component: Pagina2Component },
  { path: 'users', component: UsuariosComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
