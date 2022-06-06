import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginButtonsComponent } from './login-buttons/login-buttons.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';
import { PageContentComponent } from './page-content/page-content.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsComponent } from './events/events.component';
import { ForYouComponent } from './for-you/for-you.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PastEventsComponent } from './past-events/past-events.component';
import { CategoriesComponent } from './categories/categories.component';
import { EventsRegisterComponent } from './events-register/events-register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonsComponent,
    MainMenuComponent,
    FooterComponent,
    PageContentComponent,
    ContactComponent,
    AboutUsComponent,
    EventsComponent,
    ForYouComponent,
    PastEventsComponent,
    CategoriesComponent,
    EventsRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
