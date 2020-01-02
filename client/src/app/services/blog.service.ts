import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  options;
  domain =this.authService.domain;
  constructor(
    private authService:AuthService,
    private http:HttpClient,
  ) { }

  createAuthenticatoinHeader(){
    this.authService.loadToken()
    // this.options=new RequestOptions({
      var headers=new HttpHeaders({
        'Content-type':'application/json',
        'authorization':this.authService.authToken});
      this.options={headers:headers};
    // });
  }

  newBlog(blog):Observable<any>{
    this.createAuthenticatoinHeader();
    return this.http.post<any>(this.domain + 'blogs/newBlog',blog,this.options)
  }

  getAllBlogs():Observable<any>{
    this.createAuthenticatoinHeader();
    return this.http.get<any>(this.domain +'blogs/allBlogs',this.options)
  }
  getSingleBlog(id):Observable<any>{
    this.createAuthenticatoinHeader();
    return this.http.get<any>(this.domain +'blogs/singleBlog/'+ id, this.options)
  }

  editBlog(blog):Observable<any>{
    this.createAuthenticatoinHeader();
    return this.http.put<any>(this.domain + 'blogs/updateBlog/',blog,this.options)
  }
  deleteBlog (id):Observable<any>{
    this.createAuthenticatoinHeader();
    return this.http.delete<any>(this.domain +'blogs/deleteBlog/' +id,this.options)
  }

  likeBlog(id){
    const blogData = {id:id}
    return this.http.put(this.domain +  'blogs/likeBlog',blogData,this.options)
  }

  dislikeBlog(id){
    const blogData = {id:id}
    return this.http.put(this.domain +  'blogs/dislikeBlog',blogData,this.options)

  }
  postComment(id, comment):Observable<any>{
   this.createAuthenticatoinHeader();
   const blogData = {
     id: id,
     comment: comment
   }
   return this.http.post<any>(this.domain + 'blogs/comment', blogData, this.options);
 }

}
