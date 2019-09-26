import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Compania} from '../models/compania';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompaniaService {

    API_URI='http://localhost:3000/api';

  constructor(private http: HttpClient) { }

    getCompanias(){
           return this.http.get(`${this.API_URI}/reserva`);
      }
    getCompania(id:string){
        return this.http.get(`${this.API_URI}/reserva/${id}`);
   }
    deleteCompania(id:string){
        return this.http.delete(`${this.API_URI}/reserva/${id}`);
    }

    saveCompania(compania:Compania){
        return this.http.post(`${this.API_URI}/reserva`,compania);
   }
    updatedCompania(id:string|number,updatedCompania:Compania): Observable<Compania> {
        return this.http.put(`${this.API_URI}/reserva/${id}`,updatedCompania);
      }

    }
