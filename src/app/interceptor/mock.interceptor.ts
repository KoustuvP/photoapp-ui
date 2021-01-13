import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class MockInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const {url,method,body,headers} = request;
    if(url=='mockserver/api')
    return  of(new HttpResponse({
      status:200,
      body: {
        role:'admin'
      }
    }))
    return next.handle(request);
  }
}
