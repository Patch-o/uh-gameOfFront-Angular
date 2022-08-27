import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-houses',
  templateUrl: './gallery-houses.component.html',
  styleUrls: ['./gallery-houses.component.scss']
})
export class GalleryHousesComponent implements OnInit {

  @Input() public house : any = [];
  @Input() chichoDefault: any = {src:'https://www.combogamer.com/wp-content/uploads/2016/08/Chicho-Terremoto-tiro-especial.gif',
  name:'chicho'}
  constructor() { }
  options = { autoHide: false, scrollbarMinSize: 100 }
  ngOnInit(): void {
  }

}
