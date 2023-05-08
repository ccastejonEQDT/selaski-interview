import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OptionBarComponent } from './components/option-bar/option-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { InfoHeadingComponent } from './components/info-heading/info-heading.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, OptionBarComponent, SearchBarComponent, MainScreenComponent, InfoHeadingComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
