import { Component, OnInit, Input } from '@angular/core';
import * as PlayerManager from '../PlayerManager';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
@Input() players: any;
@Input() team1;
@Input() team2;
@Input() teams_ready: boolean;
@Input() isGameStarted: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {

  }

  // startGame() {
  //   this.isGameStarted = true;
  //   console.log('start game clicked');
  //   this.players = PlayerManager.getPlayers();
  //   this.players = PlayerManager.splitTeams(this.players);
  //   this.teams_ready = true;
  //   console.log(this.players);
  //   this.team1 = new PlayerManager.Team(this.players['1']);
  //   this.team2 = new PlayerManager.Team(this.players['2']);
  //   console.log(this.team1);
  //   console.log(this.team2);
  //   //this._router.navigate(['/gunner']);
  // }
}
