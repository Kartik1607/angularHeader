import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: string[];
  logo: string;

  constructor() {
    this.logo = 'assets/logo.png'
    this.items = ['About Us', 'Courses', 'Bootcamps', 'Events', 'Resources', 'Competitions', 'Contact Us'];
  }

  ngOnInit() {
  }

}
