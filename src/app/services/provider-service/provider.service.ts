import { configHelper } from 'src/app/configurations/configHelper';
import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  url: string;
  constructor(private http: HttpService) {
    this.url = `${configHelper.URL}/provider`;
  }

  public getProviders(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  public addProvider(data): Observable<any> {
    return this.http.post(`${this.url}`, data);
  }

  public updateProvider(data): Observable<any> {
    return this.http.put(`${this.url}/${data.idProvider}`, data);
  }

  public deleteProvider(id): Observable<any> {
    return this.http.delete(`${this.url}`, id);
  }
}
