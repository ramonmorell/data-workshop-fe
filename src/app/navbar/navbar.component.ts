import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public route: Router, public translate: TranslateService) {}

  links = [
    { title: 'HOME.HOME', component: '/' },
    { title: 'SEARCH.SEARCH', component: '/search' },
    { title: 'WORKSHOP.WORKSHOP', component: '/workshop' },
  ];
  user = {
    title: 'USER.USER', component: '/user'
  }

  model = {
    left: true,
    middle: false,
    right: false,
  };

  ngOnInit(): void {}
}
