import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartjsInterface } from '../interfaces/chartjs-interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class ChartjsService {
  private apiUrl: string = 'http://localhost:3000/api/chartjs';


  constructor(private http: HttpClient) { }

  getData(): Observable<ChartjsInterface[]> {
    return this.http.get<ChartjsInterface[]>(this.apiUrl);
  }

}
