import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsComponent } from './search-results.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { routes } from '../../app-routing.module';
import { By } from '@angular/platform-browser';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [SearchResultsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
