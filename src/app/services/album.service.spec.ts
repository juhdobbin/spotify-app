import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AlbumService } from './album.service';

describe('AlbumService', () => {
  let service: AlbumService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
