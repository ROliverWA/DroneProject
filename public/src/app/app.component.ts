import { Player } from './PlayerManager';
import * as PlayerManager from './PlayerManager';
import { SocketService } from './socket.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  game_full: boolean = false;
  count = 0;
  P1: boolean= true;
  P2: boolean = true;
  G1: boolean = true;
  G2: boolean = true;
  players: any = [];
  teams_ready: boolean = false;


constructor(private socketService: SocketService) {
}




    sendMsg() {
      console.log('SendMsg Clicked');
      this.socketService.sendMsg('message', "ZZZzzZZ Sockets");
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
    this.teams_ready = true;
    
    
    console.log(this.players);
    }




}
