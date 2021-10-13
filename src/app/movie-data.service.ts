import { typeMoive } from './type-moive';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../app/type-moive';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {


  constructor( private _HttpClient:HttpClient ) { }


  getNowPlaying():Observable<any>{
    return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=7df7a995a9cb46caad1003dc4c0e0c65&language=en-US&page=1`)
  }
  getTopRated():Observable<any>{
    return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=7df7a995a9cb46caad1003dc4c0e0c65&language=en-US&page=1`)
  }
  getTrending():Observable<any>{
    return  this._HttpClient.get(`https://api.themoviedb.org/3/trending/all/day?api_key=7df7a995a9cb46caad1003dc4c0e0c65`)
  }
  getUpcoming():Observable<any>{
    return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=7df7a995a9cb46caad1003dc4c0e0c65&language=en-US&page=1`)
  }

  getDetails(id:string):Observable<any>{
    return  this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7df7a995a9cb46caad1003dc4c0e0c65&language=en-US`)
  }

  getpeople():Observable<any> {

    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=7df7a995a9cb46caad1003dc4c0e0c65&language=en-US&page=1`)
  }
  gettv():Observable<any> {

    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/popular?api_key=7df7a995a9cb46caad1003dc4c0e0c65&language=en-US&page=1`)
  }
}




