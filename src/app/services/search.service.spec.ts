import { TestBed, async } from '@angular/core/testing';

import { SearchService } from './search.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
