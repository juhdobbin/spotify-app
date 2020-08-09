import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './shared-components/search/search.component';
import { AlbumThumbComponent } from './shared-components/album-thumb/album-thumb.component';
import { SongItemComponent } from './shared-components/song-item/song-item.component';
import { HorizontalGridComponent } from './shared-components/horizontal-grid/horizontal-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlbumThumbComponent,
    SongItemComponent,
    HorizontalGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
