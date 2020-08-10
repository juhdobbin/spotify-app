import { Component, OnInit } from '@angular/core';
import { AlbumList } from 'src/app/interfaces/albums.interface';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public albums: AlbumList;
  public latestSearches: AlbumList;
  public searchValue;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.searchResults.subscribe(
      (res) => {
        this.albums = res?.albums?.items || [];
      },
      (err) => console.log(err)
    );
    this.searchService.inputSearchChanged$.subscribe(
      (res) => (this.searchValue = res),
      (err) => console.log(err)
    );
    this.getLatestSearches();
  }

  getLatestSearches() {
    this.latestSearches = JSON.parse(localStorage.getItem('latestSearches'));
    console.log('this.latestSearches', this.latestSearches)
  }
}
