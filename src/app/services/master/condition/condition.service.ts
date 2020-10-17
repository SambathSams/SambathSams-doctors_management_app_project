import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { baseURL } from 'constants';

@Injectable({
  providedIn: 'root'
})
export class ConditionService {
  readonly baseUrl = baseURL;
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getAll(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'api/condition');
  }

  getById(id): Observable<any> {
    return this.http.get(this.baseUrl + 'api/condition' + '/' + id);
  }

  create(data): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(this.baseUrl + 'api/condition', data, httpOptions);
  }

  updateById(id, data): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put(this.baseUrl + 'api/condition' + '/' + id, data, httpOptions);
  }

  deleteById(id): Observable<any> {
    return this.http.delete(this.baseUrl + 'api/condition' + '/' + id);
  }
}
