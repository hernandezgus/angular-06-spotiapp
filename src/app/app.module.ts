import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArtistComponent } from './artist/artist.component';
import { SpotifyService } from './spotify.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
    ],
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    SearchComponent, 
    NavbarComponent, 
    ArtistComponent 
    ],
  bootstrap:    [ AppComponent ],
  providers: [SpotifyService]
})
export class AppModule { }
