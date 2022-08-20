import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-characters',
  templateUrl: './gallery-characters.component.html',
  styleUrls: ['./gallery-characters.component.scss']
})
export class GalleryCharactersComponent implements OnInit {
 
  @Input() public character : any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
