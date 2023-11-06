import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private http: HttpClient, private Cookie: CookieService) {}

  private url: string = 'https://super-cod-9vvjwwggp66hpq6j-8000.app.github.dev/';
  // private url: string = 'https://bug-free-meme-jw7977wx94gc9qr-8000.app.github.dev';
<<<<<<< HEAD
  // private url: string = 'http://127.0.0.1:8000';
=======
  private url: string = 'https://cautious-meme-w6w999p5693gpgq-8000.app.github.dev';
>>>>>>> bd9ac706c186f5fee3985dd130b9be50fa0e5660


  public post(path: string, data: any): Observable<any> {
    const token = this.Cookie.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (!token) headers.set('Authorization', `Bearer ${token}`);

    return this.http.post(`${this.url}${path}`, JSON.stringify(data), { headers });
  }

  public get(path: string): Observable<any> {
    const token = this.Cookie.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`${this.url}${path}`, { headers });
  }

  public delete(path: string): Observable<any> {
    const token = this.Cookie.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (!token) headers.set('Authorization', `Bearer ${token}`);


    return this.http.delete(`${this.url}${path}`, { headers });
  }

  public put(path: string, data: any): Observable<any> {
    const token = this.Cookie.get('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (!token) headers.set('Authorization', `Bearer ${token}`);

    return this.http.put(`${this.url}${path}`, JSON.stringify(data), { headers });
  }

}
