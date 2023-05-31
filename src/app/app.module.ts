
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClubEventComponent } from './club-event/club-event.component';
// import { ClubEventComponent } from './club-event/club-event.component';
// import { HomeComponent } from './home/home.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { AboutUsComponent } from './about-us/about-us.component';
// import { EventsComponent } from './events/events.component';
// import { TeamComponent } from './team/team.component';
// import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
