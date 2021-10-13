import { AuthGuard } from './auth.guard';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TrendingComponent } from './trending/trending.component';
import { TopratedComponent } from './toprated/toprated.component';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  {
    path: "", redirectTo: "Home", pathMatch: 'full'
  },
  {
    path: 'Home',  component: HomeComponent
  },
  {
    path: 'Nowplaying', canActivate:[AuthGuard] , component: NowplayingComponent
  },
  {
    path: 'TopRated', canActivate:[AuthGuard] , component: TopratedComponent
  },
  {
    path: 'Trending',canActivate:[AuthGuard] , component: TrendingComponent
  },
  {
    path: 'Upcoming', canActivate:[AuthGuard] , component: UpcomingComponent
  },
  {
    path: 'TV', canActivate:[AuthGuard] , component: TvComponent
  },
  {
    path: 'People', canActivate:[AuthGuard] , component: PeopleComponent
  },
  {
    path: 'show/:id', canActivate:[AuthGuard] , component: ShowDetailsComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '**', component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
