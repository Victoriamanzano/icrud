import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ListClientsComponent } from "./components/clients/list-clients/list-clients.component";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
               RouterOutlet, NavbarComponent,
               ListClientsComponent, ReactiveFormsModule,
               HttpClientModule, RouterModule,
               CommonModule
             ]
})

export class AppComponent {
  title = 'eigth';
}
