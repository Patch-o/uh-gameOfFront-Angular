import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceChronologyService {

  constructor(private http: HttpClient) { }
  getChrono(){ 
    return this.http.get("https://api.got.show/api/show/characters")
   }
}
