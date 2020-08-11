import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  inject,
  fakeAsync,
} from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SearchService } from 'src/app/services/search.service';
import { AlbumList } from 'src/app/interfaces/albums.interface';
import { of } from 'rxjs';

const albumResponse: AlbumList = {
  albums: [
    {
      href: 'url',
      items: [
        {
          album_type: 'string',
          artists: [
            {
              external_urls: {
                spotify: 'string',
              },
              href: 'string',
              id: 'string',
              name: 'string',
              type: 'string',
              uri: 'string',
            },
          ],
          available_markets: ['string'],
          external_urls: {
            spotify: 'string',
          },
          href: 'string',
          id: 'string',
          images: [
            {
              height: 300,
              url: 'string',
              width: 123,
            },
          ],
          name: 'string',
          release_date: 'string',
          release_date_precision: 'string',
          total_tracks: 123,
          type: 'string',
          uri: 'string',
        },
      ],
      limit: 1,
      next: 'next',
      offset: 10,
      previous: 'url',
      total: 10,
    },
  ],
};

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  let searchService: SearchService;
  let searchServiceSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [SearchComponent],
      providers: [SearchService],
    }).compileComponents();
  }));

  beforeEach(() => {
    searchService = TestBed.inject(SearchService);
    searchServiceSpy = spyOn(searchService, 'search').and.returnValue(
      of(albumResponse)
    );

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the searchService when the user type some text on input', fakeAsync(
    inject([SearchService], (searchService: SearchService) => {
      const input = fixture.debugElement.query(By.css('#search-input'));
      expect(input).toBeDefined();

      const element = input.nativeElement as HTMLInputElement;
      element.value = 'adele';
      element.dispatchEvent(new Event('input'));
      element.dispatchEvent(new Event('change'));

      tick(500);

      expect(searchService.search).toHaveBeenCalledWith('adele');
    })
  ));

  it('should not call the searchService when the user type nothing', fakeAsync(
    inject([SearchService], (searchService: SearchService) => {
      const input = fixture.debugElement.query(By.css('#search-input'));
      expect(input).toBeDefined();

      const element = input.nativeElement as HTMLInputElement;
      element.value = '';
      element.dispatchEvent(new Event('input'));
      element.dispatchEvent(new Event('change'));

      tick(500);

      expect(searchService.search).not.toHaveBeenCalled();
    })
  ));
});
