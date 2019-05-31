import * as PlayerManager from './PlayerManager';
import { SocketService } from './socket.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { fader } from './route-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // fader
  ],
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

    // prepareRoute(outlet: RouterOutlet) {
    //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    // }



}
