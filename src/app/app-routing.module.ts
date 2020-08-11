import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { AlbumDetailsComponent } from './pages/album-details/album-details.component';
import { AuthResolve } from './resolve/auth-resolve';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  {
    path: '',
    component: SearchResultsComponent,
    resolve: { init: AuthResolve },
  },
  {
    path: 'albums/:id',
    component: AlbumDetailsComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
