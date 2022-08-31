import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.scss'],

})
export class TraductorComponent implements OnInit {

  constructor(private translate: TranslateService) { }
  public selectLanguage(event: any) {
    this.translate.use(event)
    console.log(event);
    
  }
  ngOnInit(): void {
  }

}
