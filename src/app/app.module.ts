import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ChronologyComponent } from './pages/chronology/chronology.component';
import { HousesComponent } from './pages/houses/houses.component';
import { GalleryCharactersComponent } from './shared/components/gallery-characters/gallery-characters.component';
import { GalleryHousesComponent } from './shared/components/gallery-houses/gallery-houses.component';
import { GalleryChronologyComponent } from './shared/components/gallery-chronology/gallery-chronology.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    ChronologyComponent,
    HousesComponent,
    GalleryCharactersComponent,
    GalleryHousesComponent,
    GalleryChronologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
