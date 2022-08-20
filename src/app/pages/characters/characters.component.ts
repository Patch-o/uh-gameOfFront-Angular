import { ServiceCharactersService } from './../../shared/services/service-characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  
  characters= [];


  constructor(private pajaritoCharacters: ServiceCharactersService) { }

  ngOnInit(): void {
    this.pajaritoCharacters.getCharacters().subscribe((res:any) => {
      this.characters = res;
      
      console.log(res);
    })
  }

}
