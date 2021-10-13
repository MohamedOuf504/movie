import { MovieDataService } from './../movie-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  imgSrc : string= "https://image.tmdb.org/t/p/w500"
  listOfPeople: any[] = []
  constructor(public _MovieDataService :MovieDataService ) { }

  ngOnInit(): void {
    this._MovieDataService.getpeople().subscribe((response) => {

      this.listOfPeople = response.results
    })
  }

}
