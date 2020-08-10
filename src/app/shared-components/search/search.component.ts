import { Component, Output } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/internal/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() resultSearch;

  public searchValue;

  constructor(private searchService: SearchService) {
    this.searchService.inputSearchChanged$
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(() => {
        if (this.searchValue === '') {
          this.searchService.searchResults$.next(null);
        } else {
          this.search(this.searchValue);
        }
      });
  }

  search(value) {
    this.searchService.search(value).subscribe(
      (res) => this.searchService.searchResults$.next(res),
      (err) => console.log(err)
    );
  }

  searchValueChanged() {
    this.searchService.inputSearchChanged$.next(this.searchValue);
  }
}
