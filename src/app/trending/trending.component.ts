import { Component, OnInit } from '@angular/core';
import { MovieDataService } from './../movie-data.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  trendinglist: any[] = [];
  imgpath: string = "https://image.tmdb.org/t/p/w500"
  constructor(_MovieDataService: MovieDataService) {

    _MovieDataService.getTrending().subscribe(


      (trendingData) => {
        this.trendinglist = trendingData.results
        console.log(this.trendinglist)

      },

      (error) => {
        console.log(error)
      },

      () => {
        console.log("done")
      })


  }
  ngOnInit(): void {

  }
}

