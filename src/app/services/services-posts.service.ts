import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.—type=“interface”';

@Injectable({
  providedIn: 'root'
})
export class ServicesPostsService {
  
  
  private url = 'https://my-json-server.typicode.com/mariogiron/blog-server/posts';
  
  private urlHttp = inject(HttpClient);

  getAll(): Observable<Post[]> {
    return this.urlHttp.get<Post[]>(this.url);
  }

  getById(id: number): Observable<Post> {
    const url = `${this.url}/${id}`;
    return this.urlHttp.get<Post>(url);
  }

  create(postData: any): Observable<Post> {
    return this.urlHttp.post<Post>(this.url, postData);
  }

  deleteById(postId: string): Observable<Post> {
    return (this.urlHttp.delete<Post>(`${this.url}/${postId}`))
  }
}

