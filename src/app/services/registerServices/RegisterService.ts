import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  allFormData = new BehaviorSubject<any>(null);
  constructor() { }
}
