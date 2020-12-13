import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    public translate: TranslateService,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.buildForm();
    this.loginForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  showForm = true;

  buildForm = () => {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required], []],
      userPassword: ['', [Validators.required], []],
    });
  };

  submit = (event: Event) => {
    event.preventDefault();
    const values = this.loginForm.value;
    if (this.loginForm.valid) {
      this.loginService.authenticateUser(values).subscribe((response) => {
        console.log(response);
        this.showForm = false;
      }, (err) => {
        console.log(err);
      });
    }
  };

  ngOnInit(): void { }
}
