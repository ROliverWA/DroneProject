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
  role: string;
  team: number;


  constructor(private _socketService: SocketService, private _route: ActivatedRoute,
    private _router: Router) {
<<<<<<< HEAD
    var socket = this._socketService.holdSocket();
    var socket2 = this._socketService.socketToGo();
=======
    let socket = this._socketService.holdSocket();
    let socket2 = this._socketService.socketToGo();
>>>>>>> 3693b3f1dc3d145da2ba9d502f730b07d7b3089b
    console.log(socket);
    console.log(socket2);
  }

<<<<<<< HEAD

=======
>>>>>>> 3693b3f1dc3d145da2ba9d502f730b07d7b3089b

  ngOnInit() {
    this.renderModel();
    // fetch('./assets/3dModels/halcon_milenario/scene.gltf')
    //   .then(response => {
    //     console.log('should be model obj ->', response);
    //     console.log('idk what this does ->', response.json());
    //   });
  }




  logPlayer(roll, name, team, play) {
    PlayerManager.logPlayer(roll, name, team);
    this.role = roll;
    this.team = team;
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
<<<<<<< HEAD
    // this._router.navigate(['/lobby'])
  }
  createGame() {
=======
  }

  startGame() {
>>>>>>> 3693b3f1dc3d145da2ba9d502f730b07d7b3089b
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
<<<<<<< HEAD
=======
    this._router.navigate(['/gunner']);
    // this._router.navigate(['/lobby'])
  }

  async renderModel() {
    const response = await fetch('./assets/3dModels/halcon_milenario/scene.gltf');
    const json = await response.json();
    console.log('hope this works ->', json);
>>>>>>> 3693b3f1dc3d145da2ba9d502f730b07d7b3089b
  }
}
