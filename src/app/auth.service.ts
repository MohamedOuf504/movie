import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
Router


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData = new BehaviorSubject(null)


  saveUserData() {
    let encodedData = JSON.stringify(sessionStorage.getItem('userToken'))
    this.userData.next(jwtDecode(encodedData))
    console.log(this.userData);

  }
  constructor(public _HttpClient: HttpClient, public _Router: Router) {
    if (sessionStorage.getItem('userToken') != null)
    {
      this.saveUserData()
    }


  }


  register(formdata: object): Observable<any> {
    return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signup`, formdata)
  }
  login(formdata: object): Observable<any> {
    return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signin`, formdata)
  }

  logout() {
    sessionStorage.removeItem('userToken')
    this.userData.next(null)
    this._Router.navigate(['/login'])

  }

}
