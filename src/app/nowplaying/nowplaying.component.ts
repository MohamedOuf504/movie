import { Component, OnInit } from '@angular/core';
import { MovieDataService } from './../movie-data.service';


@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.css']
})
export class NowplayingComponent implements OnInit {
  nowPlayinglist:any[]=[];
  imgpath:string="https://image.tmdb.org/t/p/w500"
  constructor(_MovieDataService:MovieDataService)
  {

    _MovieDataService.getNowPlaying().subscribe(


      (nowPlayingData) => {
        this.nowPlayinglist = nowPlayingData.results
        console.log(this.nowPlayinglist)

      },

      (error) => {
        console.log(error)
      },

      () => {
        console.log("done")
      })


  }
  show() {
console.log("hi")
  }

  ngOnInit(): void {

  }

}


