import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot-nav',
  templateUrl: './foot-nav.component.html',
  styleUrls: ['./foot-nav.component.scss']
})
export class FootNavComponent implements OnInit {

  constructor(private translate: TranslateService) { }
  public selectLanguage(event: any) {
    this.translate.use(event)
    console.log(event);
    
  }
  ngOnInit(): void {
  }

}
