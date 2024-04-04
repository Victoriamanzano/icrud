
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientInterface } from '../../core/interfaces/client-interface';


@Injectable({
  providedIn: 'root'
})

export class ClientService {

  getProducts() {
    throw new Error('Method not implemented.');
  }
   private myAppUrl: string;
   private myApiUrl: string;

   constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/clients/';
  }

  getListClients(): Observable<ClientInterface[]> {
    return this.http.get<ClientInterface[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteClient(id:number): Observable<void> {
   return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  saveClient(client: ClientInterface): Observable<ClientInterface> {
    return this.http.post<ClientInterface>(`${this.myAppUrl}${this.myApiUrl}`, client);
  }

  getClient(id: number): Observable<ClientInterface> {
    return this.http.get<ClientInterface>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  updateClient(id: number, client: ClientInterface): Observable<ClientInterface> {
    return this.http.put<ClientInterface>(`${this.myAppUrl}${this.myApiUrl}${id}`, client);
  }
}
