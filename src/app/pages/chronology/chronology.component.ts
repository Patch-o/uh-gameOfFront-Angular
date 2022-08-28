import { Component, OnInit } from '@angular/core';
import { ServiceChronologyService } from 'src/app/shared/services/service-chronology.service';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.scss']
})
export class ChronologyComponent implements OnInit {

  chronology: any={};
  ageList: number[] = [];

  constructor(
    private pajarito: ServiceChronologyService
  ) { }

  ngOnInit(): void {
    this.pajarito.getChrono().subscribe((res:any) => {
      this.chronology = res;
            console.log(this.chronology);

        let list =[];
      for (let i = 0; i < this.chronology.length; i++) {
        let chrono = this.chronology[i];
         this.ageList= chrono.age.age       
         
         console.log(this.ageList);
        }
        // this.ageList= list;
        // console.log(this.ageList);
      
      
      
      
    })
  }

}
