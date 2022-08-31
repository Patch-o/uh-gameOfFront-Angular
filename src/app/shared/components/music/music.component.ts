import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  
  audio = new Audio();
  file= [{ url: "../../../../assets/music.mp3"}] ;

  constructor() { }

  ngOnInit(): void {
  }
   audioP(url:any){
    this.audio.src = url;
    this.audio.load();
    this.audio.play();
   }
  play(){
    this.audio.play();
  }
  stop(e: any){
    e.stopPropagation();
    this.audio.pause();
    this.audio.currentTime = 0;

  }
}
