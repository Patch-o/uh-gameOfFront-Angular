import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'game-of-front';
  constructor(private translate: TranslateService) {}
    public selectLanguage(event: any) {
      this.translate.use(event)
    }
    
    
    
    // translate.setDefaultLang('en');
    // translate.use('en-EN');
    // this.
  }



