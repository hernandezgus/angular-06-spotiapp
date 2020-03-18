import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) {
   }

   getQuery( query: string ) {
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQD3EV-jXdoQwvV25AsQMrcb8Re9yOG63NeJLNlTW_lF8xP7WtVfX40pWoVjMZqs4Sn3BmoXU3HR8JlOpAw'
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

  //	https://api.spotify.com/v1/artists/{id}
  
  getArtist(id: string) {
    return this.getQuery(`artists/${id}`)
      .pipe( map( data => {
        return data;
      }));
  }
}