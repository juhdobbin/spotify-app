import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private AUTHORIZE_URL = environment.authorize_url;
  private CLIENT_ID = environment.client_id;
  private REDIRECT_URL = 'http://localhost:4200/';

  constructor() { }

  getAccessToken() {
    const url = `${this.AUTHORIZE_URL}?response_type=token&client_id=${encodeURIComponent(
      this.CLIENT_ID
    )}&redirect_uri=${encodeURIComponent(this.REDIRECT_URL)}`;

    window.location.href = url;
  }
}
