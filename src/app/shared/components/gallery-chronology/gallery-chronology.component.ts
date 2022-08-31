import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-chronology',
  templateUrl: './gallery-chronology.component.html',
  styleUrls: ['./gallery-chronology.component.scss']
})
export class GalleryChronologyComponent implements OnInit {

  @Input() public chrono : any = [];

  constructor() { }
  options = { autoHide: false, scrollbarMinSize: 100 }
  ngOnInit(): void {
  }
  reverse(){
    this.chrono.reverse()
  }
}
