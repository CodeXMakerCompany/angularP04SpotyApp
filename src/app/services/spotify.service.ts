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

      'Authorization':'Bearer BQBd-MA6YlJQasY2p_EEq8P9-KRzvtbxv7L0_oI061eMmMIaJfmqTGaNoQZ45byuwwRzR-vkvsEadmMVNgk'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtista( termino: string ){

    const headers = new HttpHeaders({

      'Authorization':'Bearer BQBd-MA6YlJQasY2p_EEq8P9-KRzvtbxv7L0_oI061eMmMIaJfmqTGaNoQZ45byuwwRzR-vkvsEadmMVNgk'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=3`, { headers });

  }

}
