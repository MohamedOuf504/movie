import { AppModule } from './../app.module';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  id: string = "";
  location : any = null
  dataOfResponse:any={};
  imgpath: string = "https://image.tmdb.org/t/p/w500";
  constructor(public _ActivatedRoute:ActivatedRoute, private _MovieDataService:MovieDataService , public _Router:Router) {
   }
  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this._MovieDataService.getDetails(this.id).subscribe((response) => {
    this.dataOfResponse =response

    })

  }
  back() {
 this.location = this._ActivatedRoute.snapshot.fragment
  this._Router.navigate([this.location])
}
}
