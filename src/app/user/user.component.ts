import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(public translate: TranslateService) { }

  showLogin = true;
  showRegistry = false;

  handleClickRegistry = (event)=>{
    event.preventDefault();
    this.showLogin = false;
    this.showRegistry= true;
  }

  handleClickLogin = (event)=>{
    event.preventDefault();
    this.showLogin = true;
    this.showRegistry= false;
  }

  ngOnInit(): void { }
}
