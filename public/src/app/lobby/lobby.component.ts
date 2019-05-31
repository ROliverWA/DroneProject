import { Component, OnInit, Input } from '@angular/core';
import * as PlayerManager from '../PlayerManager';
import { ActivatedRoute, Router } from '@angular/router';
import { ghost } from '../AnimationManager';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css'],
  animations: [
    ghost
  ]
})
export class LobbyComponent implements OnInit {
// @Input() players: any;
// @Input() team1;
// @Input() team2;
// @Input() teams_ready: boolean;
// @Input() isGameStarted: boolean;
  @Input() game_full: boolean;
  @Input() g1: boolean;
  @Input() p1: boolean;
  @Input() g2: boolean;
  @Input() p2: boolean;
  @Input() role: string;
  @Input() team: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {

  }
  startGame(role, team) {
    this._router.navigate(['/gunner/'+this.role+'/'+this.team]);
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
