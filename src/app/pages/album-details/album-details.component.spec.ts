import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailsComponent } from './album-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlbumDetailsComponent', () => {
  let component: AlbumDetailsComponent;
  let fixture: ComponentFixture<AlbumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AlbumDetailsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
