// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA3HfgjlX5LuCIhAcTeZaV3cDKxUy_B6Ck",
    authDomain: "myecommerce-185ab.firebaseapp.com",
    databaseURL: "https://myecommerce-185ab.firebaseio.com",
    projectId: "myecommerce-185ab",
    storageBucket: "myecommerce-185ab.appspot.com",
    messagingSenderId: "26259217349"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
