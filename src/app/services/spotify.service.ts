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

      'Authorization':'Bearer BQAguQucpdFoKRyPUDD98tMMdk0meRBrhEreWwtRL_NBjSXlc6y0CsVczjaZEAGhLM_nmpqbdBukc-CKY0w'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items));
  }

  getArtistas( termino: string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=8`)
      .pipe( map( data => data['artists'].items));

  }

  getArtista( id: string ){

    return this.getQuery(`artists/${id}`);

  }

  getTopTracks( id: string ){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe( map( data => data['tracks']));

  }


}
