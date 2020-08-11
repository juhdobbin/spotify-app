import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class AuthResolve implements Resolve<any> {
  constructor(
    private router: Router,
    private authorizationService: AuthorizationService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const params: any = this.getHashParams();

    if (params && params.access_token) {
      localStorage.setItem('token', params.access_token);
    } else if (route.queryParamMap.get('error')) {
      this.router.navigate(['error']);
    } else if (!localStorage.getItem('token')) {
      this.authorizationService.getAccessToken();
    }
  }

  // Função Retirada da documentação da API do Spotify
  getHashParams() {
    const hashParams = {};
    let e;
    const regex = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);

    while ((e = regex.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    return hashParams;
  }
}
