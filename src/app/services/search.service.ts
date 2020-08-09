import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private API_URL = environment.api_url;
  private SEARCH = environment.search;

  constructor(private http: HttpClient) {}

  search(searchField) {
    const params = new HttpParams()
      .set('q', searchField)
      .set('type', 'album')
      .set('limit', '2');

    return this.http.get(this.API_URL + this.SEARCH, { params });
  }
}
