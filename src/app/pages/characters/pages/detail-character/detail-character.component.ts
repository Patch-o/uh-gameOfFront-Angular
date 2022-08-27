import { ServiceCharactersService } from './../../../../shared/services/service-characters.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss']
})
export class DetailCharacterComponent implements OnInit {

  detailCharacter:any={};

  constructor(
    private urlId: ActivatedRoute,
    private pajaritoCharacter: ServiceCharactersService
  ) { }
  options = { autoHide: false, scrollbarMinSize: 100 }
  ngOnInit(): void {
    this.urlId.params.subscribe(params=> {
      console.log(params['idCharacter']);
      const detail= params['idCharacter'];
      this.pajaritoCharacter.getOneCharacter(detail).subscribe((res:any)=> {
        this.detailCharacter=res
        console.log(this.detailCharacter);
        
      })
      
    })
  }

}
