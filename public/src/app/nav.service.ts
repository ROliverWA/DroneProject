import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  constructor(
    private arDrone = require('ar-drone'),
    private client  = arDrone.createClient()
  ) { }
}
