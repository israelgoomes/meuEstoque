import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { HttpClient } from '@angular/common/http';
import { configHelper } from 'src/app/configurations/configHelper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  url: string;
  constructor(private http: HttpService, private htt2: HttpClient) {
    this.url = `${configHelper.URL}/dashboard`;
  }

  public getTotalMes(param): Observable<any> {
    return this.http.get(`${this.url}/total-mes/${param}`);
  }

  public getTotalAno(param): Observable<any> {
    return this.http.get(`${this.url}/total-ano/${param}`);
  }
}
