import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { TopratedComponent } from './toprated/toprated.component';
import { TrendingComponent } from './trending/trending.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NowplayingComponent,
    TopratedComponent,
    TrendingComponent,
    UpcomingComponent,
    NotfoundComponent,
    ShowDetailsComponent,
    LoginComponent,
    RegisterComponent,
    TvComponent,
    PeopleComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
