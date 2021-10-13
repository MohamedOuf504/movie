import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  imgSrc : string= "https://image.tmdb.org/t/p/w500"
  tv: any[] = []
  constructor( public _MovieDataService:MovieDataService) { }

  ngOnInit(): void {
    this._MovieDataService.gettv().subscribe((response) => {

      this.tv = response.results
    })
  }

}
