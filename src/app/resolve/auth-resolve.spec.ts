import { AuthResolve } from './auth-resolve';
import { Router } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';

describe('AuthResolve', () => {
  let service: AuthorizationService;
  let router: Router;

  it('should create an instance', () => {
    expect(new AuthResolve(router, service)).toBeTruthy();
  });
});
