import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchValue;
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.search('bob').subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
