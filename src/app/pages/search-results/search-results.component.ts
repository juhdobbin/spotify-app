import { Component, OnInit } from '@angular/core';
import { AlbumList, SimpleAlbum } from 'src/app/interfaces/albums.interface';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';
import { Item } from '../../interfaces/albums.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public albums: AlbumList;
  public latestSearches;
  public searchValue;

  constructor(private searchService: SearchService, private router: Router) {
    this.searchService.searchResults.subscribe(
      (res) => {
        this.albums = this.searchService.searchResults$.value?.albums.items;
      },
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {
    this.searchService.inputSearchChanged$.subscribe(
      (res) =>
        (this.searchValue = this.searchService.inputSearchChanged$.value),
      (err) => console.log(err)
    );
    this.getLatestSearches();
  }

  getLatestSearches() {
    const latestSearchesLocal = JSON.parse(
      localStorage.getItem('latestSearches')
    );
    this.searchService.latestSearches$.next(latestSearchesLocal);
    this.latestSearches = this.searchService.latestSearches$.value;
  }

  albumDetails(album) {
    this.router.navigate(['/albums', album.id]);
    this.saveRecent(album);
  }

  saveRecent(album: Item) {
    let newAlbum: SimpleAlbum = {
      name: album.name,
      id: album.id,
      artists: album.artists,
      images: album.images,
    };

    if (!this.latestSearches) {
      this.latestSearches.push(newAlbum);
    } else if (!this.latestSearches.some((item) => item.id === album.id)) {
      this.latestSearches = [...this.latestSearches, newAlbum];
    }

    localStorage.setItem('latestSearches', JSON.stringify(this.latestSearches));
    this.searchService.latestSearches$.next(this.latestSearches);
  }
}
