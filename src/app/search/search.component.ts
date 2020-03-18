import { Component } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService ) {
    
   }

  searchArtist(termino: string)
  {
    this.loading = true;
    this.spotifyService.searchArtist(termino)
      .subscribe( (data: any) => {
        this.artistas = data;
        this.loading = false;
      });
  }
}