import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/bienvenido', pathMatch: "full" },
    { path: 'bienvenido', component: HomeComponent },
    { path: 'busqueda', loadComponent: () => import('./components/busqueda/busqueda.component').then(mod => mod.BusquedaComponent)},
    { path: 'pelicula/alta', loadComponent: () => import('./components/pelicula-alta/pelicula-alta.component').then(mod => mod.PeliculaAltaComponent)},
    { path: 'pelicula/listado', loadComponent: () => import('./components/pelicula-listado/pelicula-listado.component').then(mod => mod.PeliculaListadoComponent)},
    { path: 'actor/listado', loadComponent: () => import('./components/actor-listado/actor-listado.component').then(mod => mod.ActorListadoComponent)},
    { path: 'actor/alta', loadComponent: () => import('./components/actor-alta/actor-alta.component').then(mod => mod.ActorAltaComponent)},

    { path: '**', component: PageNotFoundComponent},

];
