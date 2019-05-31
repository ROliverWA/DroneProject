import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GunnerComponent } from './gunner/gunner.component';
import { HomeComponent } from './home/home.component';
import { LobbyComponent } from './lobby/lobby.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'gunner/', component: GunnerComponent},
  {path: 'gunner/:role/:team', component: GunnerComponent},
  {path: 'lobby', component: LobbyComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
