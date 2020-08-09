import { Component, OnInit } from '@angular/core';
import { AlbumList } from 'src/app/interfaces/albums.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public albums: AlbumList;
  public latestSearches: AlbumList;

  constructor() {}

  ngOnInit(): void {
    this.getLatestSearches();
  }

  getLatestSearches() {
    this.latestSearches = JSON.parse(localStorage.getItem('latestSearches'));
  }
}
