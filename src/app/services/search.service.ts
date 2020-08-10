import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private API_URL = environment.api_url;
  private SEARCH = environment.search;

  public inputSearchChanged$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public searchResults$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public searchResults = this.searchResults$.asObservable();

  public latestSearches$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public latestSearches = this.latestSearches$.asObservable();

  constructor(private http: HttpClient) {}

  search(searchField) {
    const params = new HttpParams()
      .set('q', searchField)
      .set('type', 'album');

    return this.http.get(this.API_URL + this.SEARCH, { params });
  }


}
