import { ServiceHousesService } from './../../../../shared/services/service-houses.service';
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
  detailHouse: any = {};
  constructor(
    private urlId: ActivatedRoute,
    private pajaritoCharacter: ServiceCharactersService,
    private pajaritoHouse: ServiceHousesService
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
      this.pajaritoHouse.getHouses().subscribe((res:any) => {
        this.detailHouse= res
        console.log(this.detailHouse);
        
      })
    })
  }

}
