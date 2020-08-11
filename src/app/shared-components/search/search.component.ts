import { Component, Output, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/internal/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() resultSearch;

  public searchValue;

  constructor(private searchService: SearchService) {
    this.searchService.inputSearchChanged$
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(() => {
        console.log('this.searchValue', this.searchValue);
        console.log(
          'this.searchService.lastSearch$',
          this.searchService.lastSearch$.value
        );

        if (
          this.searchValue &&
          this.searchValue !== '' &&
          this.searchService.lastSearch$.value !== this.searchValue
        ) {
          this.searchValue = this.searchService.inputSearchChanged$.value;
          this.search(this.searchValue);
        } else if (this.searchValue === '') {
          // limpa a lista de busca ao apagar os caracteres do input
          this.searchService.searchResults$.next(null);
        }
      });
  }
  ngOnInit() {
    this.searchValue = this.searchService.inputSearchChanged$.value;
  }

  search(value) {
    if (!value) {
      return;
    }

    this.searchService.search(value).subscribe(
      (res) => this.searchService.searchResults$.next(res),
      (err) => console.log(err)
    );
  }

  searchValueChanged() {
    this.searchService.inputSearchChanged$.next(this.searchValue);
  }
}
