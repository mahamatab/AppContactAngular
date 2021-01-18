import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  infos = {name: 'mhd',
           email: 'mhd@gmail.com'
  };
  constructor() { }

  ngOnInit() {
  }

}
