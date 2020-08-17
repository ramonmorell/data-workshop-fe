import { Component, OnInit } from '@angular/core';
import { Countries } from '../constants/countries';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  countries = Countries;

  ngOnInit(): void {}
}
