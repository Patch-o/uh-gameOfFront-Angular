import { HomeComponent } from './pages/home/home.component';
import { DetailCharacterComponent } from './pages/characters/pages/detail-character/detail-character.component';
import { DetailHouseComponent } from './pages/houses/pages/detail-house/detail-house.component';
import { ChronologyComponent } from './pages/chronology/chronology.component';
import { HousesComponent } from './pages/houses/houses.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "",component: HomeComponent},
  {path: "characters", component: CharactersComponent },
  {path: "houses", component: HousesComponent},
  {path: "chronology", component: ChronologyComponent},
  {path: "houses/:idHouse", component: DetailHouseComponent},
  {path: "characters/:idCharacter", component: DetailCharacterComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
