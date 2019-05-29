import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gunner',
  templateUrl: './gunner.component.html',
  styleUrls: ['./gunner.component.css']
})
export class GunnerComponent implements OnInit {
  health: number;

  constructor() { }

  ngOnInit() {
  }

  healthloss() {

  }

}
