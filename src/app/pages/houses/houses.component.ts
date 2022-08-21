import { ServiceHousesService } from './../../shared/services/service-houses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  houses= [];

  constructor(private pajaritoHouses: ServiceHousesService) { }

  ngOnInit(): void {
    this.pajaritoHouses.getHouses().subscribe((res:any) => {
      this.houses = res;
      
      console.log(res);
    })
  }

}
