import { Component, OnInit } from '@angular/core';
import { MovieDataService } from './../movie-data.service';


@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.css']
})
export class TopratedComponent implements OnInit {

  Topratedlist: any[] = [];
  imgpath: string = "https://image.tmdb.org/t/p/w500"
  constructor(_MovieDataService: MovieDataService) {

    _MovieDataService.getTopRated().subscribe(


      (topratedData) => {
        this.Topratedlist = topratedData.results
        console.log(this.Topratedlist)

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
