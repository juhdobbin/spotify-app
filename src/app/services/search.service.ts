import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private API_URL = environment.api_url;
  private SEARCH = environment.search;

  public inputSearchChanged$: Subject<string> = new Subject<string>();

  public searchResults$: Subject<any> = new Subject<any>();
  public searchResults = this.searchResults$.asObservable();

  constructor(private http: HttpClient) {}

  search(searchField) {
    const params = new HttpParams()
      .set('q', searchField)
      .set('type', 'album');

    return this.http.get(this.API_URL + this.SEARCH, { params });
  }
}
