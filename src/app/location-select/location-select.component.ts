import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-location-select',
  templateUrl: './location-select.component.html',
  styleUrls: ['./location-select.component.scss']
})
export class LocationSelectComponent implements OnInit {

  constructor(public translate: TranslateService) { 
    translate.addLangs(['en', 'es']);

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  lenguages = {
    en : "English",
    es : "Español"
  }

  ngOnInit(): void {
  }

}
