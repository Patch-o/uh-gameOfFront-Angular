import { ServiceHousesService } from './../../../../shared/services/service-houses.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-house',
  templateUrl: './detail-house.component.html',
  styleUrls: ['./detail-house.component.scss']
})
export class DetailHouseComponent implements OnInit {

   detailHouse: any={};

  constructor(
    private urlId: ActivatedRoute,
    private pajaritoHouse: ServiceHousesService
  ) { }

  ngOnInit(): void {
    this.urlId.params.subscribe(params => {
      console.log(params['idHouse']);
      const detail=params['idHouse'];
      this.pajaritoHouse.getOneHouse(detail).subscribe((res:any)=> {
        this.detailHouse = {...res[0]};
        console.log(this.detailHouse);
        
      })
    })
  }

}
