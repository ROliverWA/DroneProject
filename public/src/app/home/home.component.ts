import { Component, OnInit } from '@angular/core';
import * as PlayerManager from "../PlayerManager";

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

  constructor() { }

  ngOnInit() {
  }
  logPlayer(roll,name, team) {
    PlayerManager.logPlayer(roll, name, team);
    this.count ++;
    if (this.count === 4) {
      this.game_full = true;
      }

    }

    startGame() {
    console.log("start game clicked");
    this.players = PlayerManager.getPlayers();
    this.players = PlayerManager.splitTeams(this.players);
    this.teams_ready = true
    console.log(this.players);
    this.team1 = new PlayerManager.Team(this.players['1']);
    this.team2 = new PlayerManager.Team(this.players['2']);
    console.log(this.team1);
    console.log(this.team2);

    }
}
