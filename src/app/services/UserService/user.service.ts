import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
usrValue = new BehaviorSubject<any>(null);
  constructor() { }
}
