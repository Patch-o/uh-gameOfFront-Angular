import { ServiceCharactersService } from './../../shared/services/service-characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  private characters = [];
  public filteredCharacters = [];
  public isLoading: boolean = false;

  constructor(private pajaritoCharacters: ServiceCharactersService  ){}


    ngOnInit(): void {
      this.isLoading = true;
    this.pajaritoCharacters.getCharacters().subscribe(
      (res: any) => {
        this.characters = res;
        this.filteredCharacters=res;
        this.isLoading= false;
        console.log(res);
      },
      err => {
        this.isLoading = false;
      }
    );
    console.log(this.isLoading);
  }

   
  search(event: any) {
    console.log(event);
    
    this.filteredCharacters = this.characters.filter((icharacter: any) => {
      if (event.target.value === '') {
        return true;
      }
      return icharacter.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
  }
}
