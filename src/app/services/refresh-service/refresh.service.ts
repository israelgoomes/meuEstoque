import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {
  refreshSale = new EventEmitter();


  constructor() { }
}
