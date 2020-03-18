import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '.././spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  artista: any = {};
  loading: boolean;

  constructor( private router: ActivatedRoute, private spotifyService: SpotifyService ) {
    this.router.params.subscribe( (params: any) => {
      this.getArtist(params['id']);
    });
   }

  getArtist(id: string){
    this.loading = true;
    this.spotifyService.getArtist(id)
      .subscribe( (artista: any) => {
        this.artista = artista;
        this.loading =  false;
      });
  }
}