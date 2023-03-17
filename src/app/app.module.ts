import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AchievementsByGameComponent } from './achievements-by-game/achievements-by-game.component';
import { AchievementsByProfileComponent } from './achievements-by-profile/achievements-by-profile.component';
import { AchievementItemComponent } from './achievement-item/achievement-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AchievementsByGameComponent,
    AchievementsByProfileComponent,
    AchievementItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
