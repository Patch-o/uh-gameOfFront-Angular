import { Component, OnInit } from '@angular/core';
import { ServiceChronologyService } from 'src/app/shared/services/service-chronology.service';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.scss'],
})
export class ChronologyComponent implements OnInit {
  chronology: any = [];
  ageList: number[] = [];
  public isLoading: boolean = false;
  constructor(private pajarito: ServiceChronologyService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.pajarito.getChrono().subscribe((res: any) => {
      this.chronology = res.sort((a: any, b: any) => {
        if (a.age?.age == null) {
        return +1
        }
        if (b.age?.age == null) {
          return -1
          }
        return (a.age?.age ?? 1) - (b.age?.age ?? 1);
      });
      this.isLoading= false;
      console.log(this.chronology);
    },err => { this.isLoading=false});
  }
}
