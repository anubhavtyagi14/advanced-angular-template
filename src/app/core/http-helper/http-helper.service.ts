import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHelperService {
  private httpWithoutInterceptor: HttpClient;
  private httpClient: HttpClient;
  constructor(
    private http: HttpClient,
    private httpBackend: HttpBackend
  ) {
    this.httpWithoutInterceptor = new HttpClient(this.httpBackend);
  }
  get<T>(url: string, params: HttpParams = new HttpParams(), byPassInterceptors?: boolean): Observable<T> {
    this.httpClient = byPassInterceptors ? this.httpWithoutInterceptor : this.http;
    return this.httpClient.get<T>(`${url}`, {
      headers: this.headers,
      params,
    });
  }

  post<T, D>(url: string, data: D, byPassInterceptors?: boolean): Observable<T> {
    this.httpClient = byPassInterceptors ? this.httpWithoutInterceptor : this.http;
    return this.httpClient.post<T>(`${url}`, data, { headers: this.headers });
  }

  put<T, D>(url: string, data: D, byPassInterceptors?: boolean): Observable<T> {
    this.httpClient = byPassInterceptors ? this.httpWithoutInterceptor : this.http;
    return this.httpClient.put<T>(`${url}`, data, {
      headers: this.headers,
    });
  }

  delete<T>(url: string, byPassInterceptors?: boolean): Observable<T> {
    this.httpClient = byPassInterceptors ? this.httpWithoutInterceptor : this.http;
    return this.httpClient.delete<T>(`${url}`, {
      headers: this.headers,
    });
  }

  get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    return new HttpHeaders(headersConfig);
  }
}
