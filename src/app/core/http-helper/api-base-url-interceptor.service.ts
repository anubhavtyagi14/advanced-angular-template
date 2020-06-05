import { Injectable, NgModule, Optional } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
  constructor(
  ) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const url = req.url.toLowerCase();
    req = req.clone({
      url: `${environment.apiUrl}${url}`
    });

    return next.handle(req);

  }
}
