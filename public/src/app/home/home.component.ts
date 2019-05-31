import { Player } from './../PlayerManager';
import { SocketService } from './../socket.service';
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
<<<<<<< HEAD
  player: Player;
  current_players;

  constructor(private _socketService: SocketService, private _route: ActivatedRoute,
    private _router: Router) {
    // var socket = this._socketService.holdSocket();
    // var socket2 = this._socketService.socketToGo();
    // console.log(socket);
    // console.log(socket2);




=======
  role: string;
  team: number;


  constructor(private _socketService: SocketService, private _route: ActivatedRoute,
    private _router: Router) {
    let socket = this._socketService.holdSocket();
    let socket2 = this._socketService.socketToGo();
    console.log(socket);
    console.log(socket2);
>>>>>>> 919cdf37d9b3295eca87b194862d63122f3bb59b
  }


  ngOnInit() {

  }




  logPlayer(roll, name, team, play) {
<<<<<<< HEAD
    this.player = PlayerManager.logPlayer(roll, name, team);
    let response = this._socketService.listen("roleselected");
    this._socketService.sendMsg("role_selected", "");
    
    console.log("THIS PLAYER " + response);
=======
    PlayerManager.logPlayer(roll, name, team);
    this.role = roll;
    this.team = team;
>>>>>>> 919cdf37d9b3295eca87b194862d63122f3bb59b
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
      this.createGame();
    }
  }

  createGame() {
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
  }

}
