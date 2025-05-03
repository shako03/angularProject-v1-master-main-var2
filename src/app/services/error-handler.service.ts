import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }



  dialogSubject = new Subject<any>()
  dialogState = this.dialogSubject.asObservable()  //გავხადოთ observable რადგან უნდა შევინახოით ინფორმაცია რომელსაც დავაკვირდებით რა მდგომარეობაშია

  showDialog(message = "error") {
    this.dialogSubject.next({ show: true, message }) //ყოველთვის როცა ახალ მდგომარეობას ვაწვდით ეს გვეტყვია ამის შემდეგ რა მდგომარეობაში იქნება
  }

  hideDialog() {
    this.dialogSubject.next({ show: false })
  }
}
