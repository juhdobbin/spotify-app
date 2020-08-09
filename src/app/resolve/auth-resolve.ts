import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthResolve implements Resolve<any> {
  constructor(private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const params: any = this.getHashParams();

    if (route.queryParamMap.get('error')) {
      this.router.navigate(['error']);
    }

    if (params && params.access_token) {
      localStorage.setItem('token', params.access_token);
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
