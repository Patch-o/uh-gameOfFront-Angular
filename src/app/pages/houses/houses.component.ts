import { ServiceHousesService } from './../../shared/services/service-houses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  private houses= [];
  public filteredHouses=[];
  public isLoading: boolean = false;

  constructor(private pajaritoHouses: ServiceHousesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.pajaritoHouses.getHouses().subscribe((res:any) => {
      this.houses = res;
      this.filteredHouses = res;
      this.isLoading= false;
      console.log(res);
    },err => { this.isLoading=false})
  }


  search(event: any) {
    console.log(event);
    
    this.filteredHouses = this.houses.filter((ihouse: any) => {
      if (event.target.value === '') {
        return true;
      }
      return ihouse.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
  }
}
