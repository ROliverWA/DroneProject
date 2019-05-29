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
  // game_full: boolean = false;
  // count = 0;
  // players: any = [];
  // teams_ready: boolean = false;
  // team1;
  // team2;


constructor(private socketService: SocketService) {
}




    sendMsg() {
      console.log('SendMsg Clicked');
      this.socketService.sendMsg('message', "ZZZzzZZ Sockets");
    }


    // logPlayer(roll,name, team) {
    // PlayerManager.logPlayer(roll, name, team);
    // this.count ++;
    // if (this.count === 4) {
    //   this.game_full = true;
    //   }

    // }

    // startGame() {
    // console.log("start game clicked");
    // this.players = PlayerManager.getPlayers();
    // this.players = PlayerManager.splitTeams(this.players);
    // this.teams_ready = true
    // console.log(this.players);
    // this.team1 = new PlayerManager.Team(this.players['1']);
    // this.team2 = new PlayerManager.Team(this.players['2']);
    // console.log(this.team1);
    // console.log(this.team2);

    // }




}
