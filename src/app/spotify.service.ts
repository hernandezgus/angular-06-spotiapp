import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify Service construido');
   }

   getQuery( query: string ) {
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQAkW--4xIJb3pXW9yV6zBKjjRND_EJMEqve9PE0edoM33q1Ss1CfG3B7lXEELgnDvPrWTd6cMaR7ikMe8I'
    });

    return this.http.get(url, { headers });
   }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe( map( data => {
        return data["albums"].items;
      }));
  }

  searchArtist(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&market=UY&limit=15`)
      .pipe( map( data => {
        return data["artists"].items;
      }));
  }
}