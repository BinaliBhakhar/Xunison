import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logout() {
    throw new Error("Method not implemented.");
  }

  apiURL = 'http://localhost:3000';
  AuthService: any;
  isAuthenticated: any;
  httpOptions: any;
  constructor(private http: HttpClient) {

    this.httpOptions = new HttpHeaders();
  }

  setHeader(): any {
    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    this.httpOptions.headers = this.httpOptions.headers.append('Authorization', localStorage.getItem("token"));
  }

  getUserList(): Observable<any> {
    this.setHeader();
    return this.http.get<any>(this.apiURL + '/getUserList', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  updateUser(user): Observable<any> {
    this.setHeader();
    return this.http.put<any>(this.apiURL + '/updateUser', (user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  addUser(newUser): Observable<any> {
    this.setHeader();
    return this.http.post<any>(this.apiURL + '/addUser',(newUser), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  deleteUser(): Observable<any> {
    this.setHeader();
    return this.http.delete<any>(this.apiURL + '/deleteUser', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  getUser(): Observable<any> {
    this.setHeader();
    return this.http.get<any>(this.apiURL + '/getUser', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
   // Error handling 
   handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    console.log('error', error);

    return throwError(errorMessage);
  }
  public get authenticated(): boolean {
    return this.AuthService.isAuthenticated();
  }
}