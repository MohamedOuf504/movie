import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  upcominglist: any[] = [];
  trendinglist: any[] = [];
  topratedlist: any[] = [];
  nowplaylist: any[] = [];
  tvlist: any[] = [];

  imgpath: string = "https://image.tmdb.org/t/p/w500"
  constructor(private _MovieDataService:MovieDataService) { }

  ngOnInit(): void {
    this._MovieDataService.getUpcoming().subscribe((response) => {
      this.upcominglist = response.results
    })


    this._MovieDataService.getTrending().subscribe((response) => {
      this.trendinglist = response.results
    })
    this._MovieDataService.getTopRated().subscribe((response) => {
      this.topratedlist = response.results
    })
    this._MovieDataService.getNowPlaying().subscribe((response) => {
      this.nowplaylist = response.results
    })
    this._MovieDataService.gettv().subscribe((response) => {
      this.tvlist = response.results
    })

  }

}
