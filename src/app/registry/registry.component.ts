import { Component, OnInit } from '@angular/core';
import { Countries } from '../constants/countries';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICountry } from '../interfaces';
import { RegistryService } from './registry.service';


@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
})
export class RegistryComponent implements OnInit {
  countries: ICountry[];
  registryForm: FormGroup;
  constructor(
    public translate: TranslateService,
    private formBuilder: FormBuilder,
    private registryService: RegistryService
  ) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang === 'es') {
        this.countries = this.countries.sort((a, b) => {
          return a.name_es.localeCompare(b.name_es);
        });
      } else {
        this.countries = this.countries.sort((a, b) => {
          return a.name_en.localeCompare(b.name_en);
        });
      }
    });
    this.countries = Countries;
    this.buildForm();
    this.registryForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  showForm = true;

  buildForm = () => {
    this.registryForm = this.formBuilder.group({
      userName: ['', [Validators.required], []],
      userCountry: ['', [Validators.required], []],
      userEmail: ['', [Validators.required, Validators.email], []],
      userPassword: ['', [Validators.required], []],
    });
  };

  submit = (event: Event) => {
    event.preventDefault();
    const values = this.registryForm.value;
    if (this.registryForm.valid) {
      this.registryService.addUser(values).subscribe((response) => {
        console.log(response);
        this.showForm = false;
      }, (err) => {
        console.log(err);
      })
    }
  };

  ngOnInit(): void { }
}
