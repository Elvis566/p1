import { Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { EventoComponent } from './evento/evento.component';

export const routes: Routes = [
    {path:'categoria', component:CategoriaComponent},
    {path:'evento', component:EventoComponent}
];
