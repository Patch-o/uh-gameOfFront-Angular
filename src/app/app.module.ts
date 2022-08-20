import { HousesComponent } from './pages/houses/houses.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ChronologyComponent } from './pages/chronology/chronology.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryCharactersComponent } from './shared/components/gallery-characters/gallery-characters.component';
import { GalleryHousesComponent } from './shared/components/gallery-houses/gallery-houses.component';
import { GalleryChronologyComponent } from './shared/components/gallery-chronology/gallery-chronology.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryCharactersComponent,
    GalleryHousesComponent,
    GalleryChronologyComponent,
    CharactersComponent,
    ChronologyComponent,
    HousesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
