import { SocketService } from './socket.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';


constructor(private socketService: SocketService) {

}




sendMsg() {
  console.log('SendMsg Clicked');
  this.socketService.sendMsg('message', "ZZZzzZZ Sockets");
}






}
