import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify service listo')
  }

  getNewReleases() {

    const headers = new HttpHeaders({

      'Authorization':'Bearer BQBJ2vTDU7enrwwE_n4gq0Jkcd7iSsr7loSj9mmCYjtV8HU-3fceD3bsXhgoky4C3pR4VEEnCi8dCyx8Ofg'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

}
