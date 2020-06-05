import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { throwError } from 'rxjs';
import { ToastrService } from '@app/shared/toastr/toastr.service';
@Injectable()
export class ErrorHandlerService implements ErrorHandler {

  private offlineErrorMessage = 'Oh! No Internet found. Please check your connection and try again.';
  constructor(
    private toastr: ToastrService,
    public dialog: MatDialog
  ) { }
  handleError(error: Error | HttpErrorResponse) {
    let errorMessage: string;
    let title: string;
    // Server or connection error happened
    if (!navigator.onLine) {
      // Handle offline error
      errorMessage = this.offlineErrorMessage;
      title = 'You are Offline!';
    } else if (error instanceof HttpErrorResponse) {
      console.error(`Server side error occurred: ${error.status}: ${error.message}`);
      errorMessage = `Sorry, we are unable to process your request.
                 An error occurred in the remote service.`;
      title = 'Internal Server Error!';

    } else {
      // Handle Client Error (Angular Error, ReferenceError...)
      // Send the error to the server and then
      // redirect the user to the page with all the info
      console.error(`Client side error occurred: ${error.message}`);
      errorMessage = `Sorry, we are unable to process your request.
                      An error occurred in the client application.`;
      title = 'Client Error!';
    }
    this.toastr.error(errorMessage, title);
    return throwError(error);
  }

}
