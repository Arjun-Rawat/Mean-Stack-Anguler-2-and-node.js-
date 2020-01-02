import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {tokenNotExpired } from 'angular-jwt';

@Injectable()
export class AuthService {

  domain = "http://localhost:8080/";
  authToken;
  user;
  options;

  constructor(
    private http: HttpClient,
  ) { }

  createAuthenticatoinHeader(){
    this.loadToken()
    // this.options=new RequestOptions({
      var headers=new HttpHeaders({
        'Content-type':'application/json',
        'authorization':this.authToken});
      this.options={headers:headers};
    // });
  }
  loadToken(){
    const token=localStorage.getItem('token')
    this.authToken=token;
  }

  registerUser(user):Observable<any> {
    return this.http.post<any>(this.domain + 'authentication/register', user);
  }

  checkUsername(username):Observable<any>{
    var url=this.domain + 'authentication/checkUsername/' +username;
    console.log(url);
    return this.http.get<any>(url)
  }
  checkEmail(email):Observable<any> {
    return this.http.get<any>(this.domain + 'authentication/checkEmail/' + email)
  }


login(user):Observable<any>{
  return this.http.post<any>(this.domain + 'authentication/login',user)
}

logout(){
  this.authToken=null;
  this.user=null;
  localStorage.clear();
}

storeUserData(token,user){
  localStorage.setItem('token',token);
  localStorage.setItem('user',JSON.stringify(user));
  this.authToken=token;
  this.user=user;
}
getProfile():Observable<any>{
  this.createAuthenticatoinHeader();
  return this.http.get<any>(this.domain + 'authentication/profile',this.options);
}
getPublicProfile(username):Observable<any>{
  this.createAuthenticatoinHeader();
  return this.http.get<any>(this.domain + 'authentication/publicProfile/' +username,this.options)
}

loggedIn(){
  this.loadToken();
  if(this.authToken){
    return false;
  }else{
    return true;
  }
}






}
