import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spotify-app';
  albums = [
    { nome: 'album nome', artista: 'artista nome' },
    { nome: 'album nome 2', artista: 'artista nome 2' },
    { nome: 'album nome 2', artista: 'artista nome 2' },
    { nome: 'album nome 2', artista: 'artista nome 2' },
    { nome: 'album nome 2', artista: 'artista nome 2' },
    { nome: 'album nome 2', artista: 'artista nome 2' },
    { nome: 'album nome 2', artista: 'artista nome 2' },

  ];
}
