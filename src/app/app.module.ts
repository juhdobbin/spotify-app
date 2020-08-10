import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomHttpInterceptor } from './interceptors/custom-http.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './shared-components/search/search.component';
import { AlbumThumbComponent } from './shared-components/album-thumb/album-thumb.component';
import { SongItemComponent } from './shared-components/song-item/song-item.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { AlbumDetailsComponent } from './pages/album-details/album-details.component';
import { ErrorComponent } from './pages/error/error.component';
import { FormatArtistsNamePipe } from './pipes/format-artists-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlbumThumbComponent,
    SongItemComponent,
    SearchResultsComponent,
    AlbumDetailsComponent,
    ErrorComponent,
    FormatArtistsNamePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
