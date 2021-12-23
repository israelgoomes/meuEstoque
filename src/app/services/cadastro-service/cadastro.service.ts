import { Injectable } from '@angular/core';
import { configHelper } from '../../configurations/configHelper';
import { HttpService } from '../http-service/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  url: string;
  constructor(private http: HttpService) {
    this.url = `${configHelper.URL}/company/cadastrar`
  }

  cadastrar(data): Observable<any> {
    return this.http.post(this.url, data);
  }


}
