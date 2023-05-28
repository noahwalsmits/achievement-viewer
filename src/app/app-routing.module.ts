import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsByGameComponent } from './achievements-by-game/achievements-by-game.component';
import { AchievementsByProfileComponent } from './achievements-by-profile/achievements-by-profile.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'achievements-by-game', component: AchievementsByGameComponent },
  { path: 'achievements-by-profile', component: AchievementsByProfileComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
