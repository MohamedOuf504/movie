import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  upcominglist: any[] = [];
  imgpath: string = "https://image.tmdb.org/t/p/w500"
  constructor(_MovieDataService: MovieDataService) {

    _MovieDataService.getUpcoming().subscribe(


      (upcomingData) => {
        this.upcominglist = upcomingData.results

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
