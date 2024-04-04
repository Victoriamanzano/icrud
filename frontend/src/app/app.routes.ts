import { Routes } from '@angular/router';

import { ListClientsComponent } from './components/clients/list-clients/list-clients.component';
import { AddEditClientsComponent } from './components/clients/add-edit-clients/add-edit-clients.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import ChartjsComponent from './components/chartjs/chartjs.component';
import { CalendarComponent } from './components/calendar/calendar.component';




export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clients', component: ListClientsComponent },
  { path: 'add', component: AddEditClientsComponent },
  { path: 'edit/:id', component: AddEditClientsComponent },
  { path: 'events', component: CalendarComponent },
  { path: 'maps', component: MapComponent },
  { path: 'chartjs', component: ChartjsComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }

];

