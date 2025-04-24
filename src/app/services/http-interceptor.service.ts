import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { catchError, Observable, pipe } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private errorhandler : ErrorHandlerService) { }

  

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpResponse<any>) => {
        if (error.status == 400) {
          console.log("bad request")
        }
        else if (error.status == 0) {
          console.log("server is not responding")
          throw error
        }
        else if(error.status == 500){

          console.log("internal server error")
        }
        else if (error.status == 404){
          console.log("Not Found")
        }
        else{
          console.log("unknown error")
        }
        this.errorhandler.showDialog(error.statusText)
        throw error
      })
    )

  }

}
