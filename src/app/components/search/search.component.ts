import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

loading: boolean;

artistasX: any[] = [];

  constructor( private spotify: SpotifyService ) { }



  buscar(termino: string) {

this.loading = true;

      console.log(termino);
      this.spotify.getArtistas( termino )
        .subscribe( (data: any) => {
          console.log(data);
          this.artistasX = data;
          
          this.loading = false;
        });

  }

}
