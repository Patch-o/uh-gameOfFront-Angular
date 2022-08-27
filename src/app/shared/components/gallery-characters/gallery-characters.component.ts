import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-gallery-characters',
  templateUrl: './gallery-characters.component.html',
  styleUrls: ['./gallery-characters.component.scss']
})
export class GalleryCharactersComponent implements OnInit {
  
  @Input() public character : any = [];
  @Input() truffle: any = {src:'https://i.gifer.com/origin/29/29c00d14bf13ea159e7c2b735a5839bc.gif',
  name:'gordito'}
  constructor() { }
  options = { autoHide: false, scrollbarMinSize: 100 }
  ngOnInit(): void {
  }

}
