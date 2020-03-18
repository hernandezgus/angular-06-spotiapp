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
  constructor(private spotifyService: SpotifyService ) { }

  searchArtist(termino: string)
  {
    console.log(termino);
    this.spotifyService.searchArtist(termino)
      .subscribe( (data: any) => {
        // console.log(data.artists.items);
        // this.artistas = data.artists.items;
        console.log(data);
        this.artistas = data;
      });
  }
}