import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from '../constants/location';

@Component({
  selector: 'app-location-select',
  templateUrl: './location-select.component.html',
  styleUrls: ['./location-select.component.scss'],
})
export class LocationSelectComponent implements OnInit {
  constructor(public translate: TranslateService) {
    const languagesKeys = Object.keys(this.languages);
    translate.addLangs(languagesKeys);
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  languages = Languages;

  ngOnInit(): void {}
}
