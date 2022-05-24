import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginButtonsComponent } from './login-buttons/login-buttons.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonsComponent,
    MainMenuComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
