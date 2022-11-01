import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyects } from '../model/proyects';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {
  URL = 'https://jmpbackend.herokuapp.com/proyects/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Proyects[]>{
    return this.httpClient.get<Proyects[]>(this.URL + 'lista');
  }

  public details(id: number): Observable<Proyects>{
    return this.httpClient.get<Proyects>(this.URL + `detail/${id}`);
  }

  public save(proyects: Proyects): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', proyects);
  }

  public update(id: number, proyects: Proyects): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyects);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
