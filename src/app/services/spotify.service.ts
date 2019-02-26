import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify service listo')
  }

  getQuery ( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({

      'Authorization':'Bearer BQDdfedmiRAVmM5oOck8TPEsh8Mi_rv-z2dtj8sqEWIdNMjzh9QEEO45PpGWpxi550OdDQ8qFvJ3gkol44w'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items));
  }

  getArtista( termino: string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=8`)
      .pipe( map( data => data['artists'].items));

  }

}
