import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItems } from '../constants/navBar';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public route: Router, public translate: TranslateService) {}

  menuItems = MenuItems;

  user = {
    title: 'USER.USER',
    url: '/user',
  };

  iconUser = faUserCircle;

  ngOnInit(): void {}
}
