import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  apiUrl: string = environment.API_URL; //TODO add as config

  constructor(private http: HttpClient) {
  }

  postEcho(echo: string) {
    return this.http.post(this.apiUrl + '/echo', echo, { responseType: 'text' });
  }

  tryGet() {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
