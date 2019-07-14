import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {
    
  private messageSource = new BehaviorSubject({});
  currentObject = this.messageSource.asObservable();

  constructor() { }


  changeObject(item){
     this.messageSource.next(item)
  }
}
