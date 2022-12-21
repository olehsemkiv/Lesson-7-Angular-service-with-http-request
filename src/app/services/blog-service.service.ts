import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { blogElementRequest, blogElementResponse } from '../interfaces/itemBlog';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  private url = environment.BACKEND_URL;
  private api = { blog: `${this.url}/posts` };
  constructor(private http: HttpClient) { }

  // Отримуєм данні
  getAll(): Observable<blogElementResponse[]> {
    return this.http.get<blogElementResponse[]>(this.api.blog);
  }

  // Створюємо пост
  create(postItem: blogElementRequest): Observable<void> {
    return this.http.post<void>(this.api.blog, postItem)
  }

  // Видалення поста
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.blog}/${id}`,)
  }

  // Оновлення посту
  update(postItem: blogElementRequest, id: number): Observable<blogElementRequest> {
    return this.http.patch<blogElementRequest>(`${this.api.blog}/${id}`, postItem)
  }

}
