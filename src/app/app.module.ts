import { HousesComponent } from './pages/houses/houses.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ChronologyComponent } from './pages/chronology/chronology.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { GalleryCharactersComponent } from './shared/components/gallery-characters/gallery-characters.component';
import { GalleryHousesComponent } from './shared/components/gallery-houses/gallery-houses.component';
import { GalleryChronologyComponent } from './shared/components/gallery-chronology/gallery-chronology.component';
import { DetailHouseComponent } from './pages/houses/pages/detail-house/detail-house.component';
import { DetailCharacterComponent } from './pages/characters/pages/detail-character/detail-character.component';
import { HomeComponent } from './pages/home/home.component';
import {SimplebarAngularModule} from 'simplebar-angular';
import { TraductorComponent } from './shared/components/traductor/traductor.component';
import { FootNavComponent } from './shared/components/foot-nav/foot-nav.component';
import { ReturnHomeComponent } from './shared/components/return-home/return-home.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MusicComponent } from './shared/components/music/music.component';
// import { NgxSpinnerModule } from 'ngx-spinner';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);}


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
    TraductorComponent,
    FootNavComponent,
    ReturnHomeComponent,
    MusicComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SimplebarAngularModule,
    // NgxSpinnerModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      defaultLanguage: 'en-EN'
    
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
