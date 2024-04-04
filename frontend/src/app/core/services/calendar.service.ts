import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { CalendarInterface } from '../interfaces/calendar-interface';


const apiUrl = environment.endpoint;

@Injectable({providedIn: 'root'})

export class CalendarService {

  constructor(private httpClient: HttpClient) { }


  getListEvents():Observable<CalendarInterface[]>{
    return this.httpClient.get<CalendarInterface[]>(`${apiUrl}/events`)
  }

  getEvent(id:number):Observable<CalendarInterface[]>{
    return this.httpClient.get<CalendarInterface[]>(`${apiUrl}/events${id}`)
  }

  deleteEvent(id:number):Observable<any[]>{
    return this.httpClient.delete<CalendarInterface[]>(`${apiUrl}/events${id}`)
  }

  postEvent(body: CalendarInterface):Observable<any>{
    return this.httpClient.post<CalendarInterface>(`${apiUrl}/events`, body)
  }

  updateEvent(body: CalendarInterface):Observable<any>{
    const id = body.id;
    return this.httpClient.patch<CalendarInterface>(`${apiUrl}/events${id}`, body);
  }



}
