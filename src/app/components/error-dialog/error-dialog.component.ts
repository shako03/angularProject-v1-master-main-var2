import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { ErrorHandlerService } from '../../services/error-handler.service';


@Component({
  selector: 'app-error-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss'
})
export class ErrorDialogComponent {
  constructor(private errorHandler : ErrorHandlerService){
    this.errorHandler.dialogState.subscribe(
      state => {
      this.showDialog = state.show
      this.errorMassage = state.message
      }
    )
  }

  errorMassage = ""

  showDialog : boolean = false

  closeDialog(){

    this.showDialog = false
    this.errorHandler.hideDialog()

  }

}
