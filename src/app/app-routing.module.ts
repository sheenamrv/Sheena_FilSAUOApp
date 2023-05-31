import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { TeamComponent } from './team/team.component';
import { ClubEventComponent } from './club-event/club-event.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'events', component: EventsComponent},
  {path:'team', component: TeamComponent},
  {path:'register', component: RegisterComponent},
  {path:'header', component: HeaderComponent},
  {path:'footer', component: FooterComponent},
  {path:'club-event', component: ClubEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, AboutUsComponent, EventsComponent, TeamComponent, RegisterComponent, HeaderComponent, FooterComponent, ClubEventComponent]