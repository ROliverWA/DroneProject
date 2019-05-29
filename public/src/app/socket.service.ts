import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private url = 'http://localhost:1337';
  private socket;

  constructor() {    
    this.holdSocket();
   }
   
holdSocket() {
  this.socket = io(this.url);
  this.socket.on('connected', () => {
    console.log('here now');
    return this.socket;
  })
} 

createNamespace(name) {
  const namespace = io.of('/' + name);
}

sendMsg(name="message", message) {
  this.socket.emit(name, message);
}
}
