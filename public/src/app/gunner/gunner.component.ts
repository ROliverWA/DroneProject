import { Component, OnInit, Input } from '@angular/core';
import { useAnimation } from '@angular/animations';
import { healthMeter} from '../AnimationManager';

@Component({
  selector: 'app-gunner',
  templateUrl: './gunner.component.html',
  styleUrls: ['./gunner.component.css'],
  animations: [
    healthMeter
  ]
})
export class GunnerComponent implements OnInit {

  health: number;

  constructor() { }

  ngOnInit() {
    this.health = 10;
  }

  get healthChange() {
    console.log(this.health);
    return String(this.health);
  }

  damageTaken() {
    if (this.health > 0) {
      this.health -= 1;
    }
  }

}
