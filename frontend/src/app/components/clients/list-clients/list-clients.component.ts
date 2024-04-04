import { ClientInterface } from '../../../core/interfaces/client-interface';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientService } from '../../../core/services/client.service';


@Component({
    selector: 'app-list-clients',
    standalone: true,
    templateUrl: './list-clients.component.html',
    styleUrl: './list-clients.component.scss',
    imports: [CommonModule, RouterModule]
})
export class ListClientsComponent implements OnInit {

   listClients: ClientInterface[] = []

  constructor(private _clientService: ClientService) {}

  ngOnInit(): void {
    this.getTattooListClients()
  }

  getTattooListClients() {
    this._clientService.getListClients().subscribe((data: ClientInterface[]) => {
      this.listClients = data;
    })
  }

  deleteClients(id: number) {
    if (window.confirm('Are you sure you want to delete this client?')) {
      this._clientService.deleteClient(id).subscribe(() => {
        this.getTattooListClients();
      });
    }
  }

}


