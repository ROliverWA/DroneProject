import { Component, OnInit } from '@angular/core';
import * as PlayerManager from '../PlayerManager';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  game_full: boolean = false;
  count = 0;
  players: any = [];
  teams_ready: boolean = false;
  team1;
  team2;
  isGameStarted: boolean = false;
  g1: boolean = false;
  p1: boolean = false;
  g2: boolean = false;
  p2: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }




  logPlayer(roll, name, team, play) {
    PlayerManager.logPlayer(roll, name, team);
    console.log(play);
    this.count ++;
    if (play === 'p1') {
      this.p1 = true;
      } else if (play === 'p2') {
        this.p2 = true;
      } else if (play === 'g1') {
        this.g1 = true;
      } else {
        this.g2 = true;
    }
    if (this.count === 4) {
      this.game_full = true;
      this.startGame();
    }

    // this._router.navigate(['/lobby'])
  }
  startGame() {
    this.isGameStarted = true;
    console.log('start game clicked');
    this.players = PlayerManager.getPlayers();
    this.players = PlayerManager.splitTeams(this.players);
    this.teams_ready = true;
    console.log(this.players);
    this.team1 = new PlayerManager.Team(this.players['1']);
    this.team2 = new PlayerManager.Team(this.players['2']);
    console.log(this.team1);
    console.log(this.team2);
    this._router.navigate(['/gunner']);
  }
}
