import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceCharactersService {

  constructor(private http: HttpClient) { }
    getCharacters(){ 
    return this.http.get("https://api.got.show/api/show/characters")
   }
   getOneCharacter(characterDet:any){
    return this.http.get(`https://api.got.show/api/show/characters/${characterDet}`)
   }
}
