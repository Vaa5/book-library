import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BusyIndicatorServiceService } from '../busy-indicator/busy-indicator-service.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private busyIndicatorServiceService: BusyIndicatorServiceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.busyIndicatorServiceService.setLoading(true);
    return next.handle(request)
      .pipe(catchError((err) => {
        this.busyIndicatorServiceService.setLoading(false);
        return err;
      }))
      .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse) {
          this.busyIndicatorServiceService.setLoading(false);
        }
        return evt;
      }));
  }
}
