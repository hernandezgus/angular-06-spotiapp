import { Component } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nuevasCanciones: any[] = [];

  constructor( private spotifyService: SpotifyService ) {
    this.spotifyService.getNewReleases()
      .subscribe( (data: any) => {
        //console.log(data.albums.items);
        //this.nuevasCanciones = data.albums.items;
        console.log(data);
        this.nuevasCanciones = data;
      });
   }

}