import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Map } from '../interfaces/map-interface';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


const apiUrl = environment.endpoint;

@Injectable({providedIn: 'root'})


export class MapService {

  constructor(private httpClient: HttpClient) { }

  getMarkers():Observable <Map[]>{
    return this.httpClient.get<Map[]>(`${apiUrl}maps`)
  }

}
