import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArtistComponent } from './artist/artist.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
    ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    HomeComponent, 
    SearchComponent, 
    NavbarComponent, 
    ArtistComponent 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
