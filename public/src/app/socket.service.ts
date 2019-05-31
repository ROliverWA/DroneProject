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
    console.log(this.socket);
    return this.socket;
  });

} 

createNamespace(name) {
  const namespace = io.of('/' + name);
}

sendMsg(name="message", message) {
  this.socket.emit(name, message, response => {
    return response;
  });
};

socketToGo(url = this.url) {
  let sockItToMe = io(url);
  this.socket.on('connected', () => {
    console.log(sockItToMe);
    return sockItToMe;
  })
}

listen(what) {
  this.socket.on(what, data =>
    {console.log("this works", data);
    return data;})
}

};

export function sendMsg(name="message", message) {
  this.socket.emit(name, message, response => {
    return response;
  });
};