import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }



  dialogSubject = new Subject<any>()
  dialogState = this.dialogSubject.asObservable()  

  showDialog(message = "error") {
    this.dialogSubject.next({ show: true, message }) 
  }

  hideDialog() {
    this.dialogSubject.next({ show: false })
  }
}
