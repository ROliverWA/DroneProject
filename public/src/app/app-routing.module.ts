import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GunnerComponent } from './gunner/gunner.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'gunner', component: GunnerComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
