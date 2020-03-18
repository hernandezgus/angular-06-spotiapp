import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify Service construido');
   }

  getNewReleases() {
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQAkW--4xIJb3pXW9yV6zBKjjRND_EJMEqve9PE0edoM33q1Ss1CfG3B7lXEELgnDvPrWTd6cMaR7ikMe8I'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  searchArtist(termino: string) {
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQAkW--4xIJb3pXW9yV6zBKjjRND_EJMEqve9PE0edoM33q1Ss1CfG3B7lXEELgnDvPrWTd6cMaR7ikMe8I'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&market=UY&limit=15`, { headers });
  }
}