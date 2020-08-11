import { AuthResolve } from './auth-resolve';
import { Router } from '@angular/router';

describe('AuthResolve', () => {
  it('should create an instance', () => {
    let router: Router;
    expect(new AuthResolve(router)).toBeTruthy();
  });
});
