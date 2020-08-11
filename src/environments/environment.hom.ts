// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  client_id: 'd21614b71c894d20b93ce59f2c82e421',
  client_secret: 'da95fcda2d944a7cb175ae93997b3322',
  authorize_url: 'https://accounts.spotify.com/authorize',
  api_url: 'https://api.spotify.com/v1/',
  redirect_url: 'http://localhost:4200/',
  search: 'search/',
  album: 'albums/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
