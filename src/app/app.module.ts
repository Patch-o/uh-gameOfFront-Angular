import { HousesComponent } from './pages/houses/houses.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {TranslateModule} from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ChronologyComponent } from './pages/chronology/chronology.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryCharactersComponent } from './shared/components/gallery-characters/gallery-characters.component';
import { GalleryHousesComponent } from './shared/components/gallery-houses/gallery-houses.component';
import { GalleryChronologyComponent } from './shared/components/gallery-chronology/gallery-chronology.component';
import { DetailHouseComponent } from './pages/houses/pages/detail-house/detail-house.component';
import { DetailCharacterComponent } from './pages/characters/pages/detail-character/detail-character.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryCharactersComponent,
    GalleryHousesComponent,
    GalleryChronologyComponent,
    CharactersComponent,
    ChronologyComponent,
    HousesComponent,
    DetailHouseComponent,
    DetailCharacterComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
