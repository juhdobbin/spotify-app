import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthorizationService } from '../services/authorization.service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(private authorizationService: AuthorizationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = this.addToken(request);
    const dupRequest = request.clone();

    return next.handle(dupRequest).pipe(
      catchError((error: any) => {
        if (error.status === 401) {
          this.authorizationService.getAccessToken();
          this.addToken(dupRequest);

          return next.handle(dupRequest);
        }

        return throwError(error);
      })
    );
  }

  private addToken(request: HttpRequest<any>) {
    const token: any = localStorage.getItem('token');

    if (token) {
      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return request;
  }
}
