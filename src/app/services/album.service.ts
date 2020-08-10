import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private API_URL = environment.api_url;
  private ALBUM = environment.album;

  constructor(private http: HttpClient) {}

  getAlbumDetails(albumId) {
    return this.http.get(this.API_URL + this.ALBUM + albumId);
  }
}
