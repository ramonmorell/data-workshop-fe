import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public route: Router) { }

  links = [
    { title: 'Home', component: '/' },
    { title: 'Search', component: '/search' },
    { title: 'WorkShop', component: '/workshop' }
  ];

  model = {
    left: true,
    middle: false,
    right: false
  };

  ngOnInit(): void {
    console.log(this.route);
  }

}
