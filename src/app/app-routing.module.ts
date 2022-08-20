import { ChronologyComponent } from './pages/chronology/chronology.component';
import { HousesComponent } from './pages/houses/houses.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "characters", component: CharactersComponent },
  {path: "houses", component: HousesComponent},
  {path: "chronology", component: ChronologyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
