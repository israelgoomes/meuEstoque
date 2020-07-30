import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { configHelper } from 'src/app/configurations/configHelper';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string;
  constructor(private http: HttpService) { 
    this.url = `${configHelper.URL}`;
  }

  authenticate(cnpjCpf, password): Observable<any> {
    return this.http.post(
      `${this.url}/company/autenticar`,
      { cnpjCpf, password },
    );
  }

  registerLogin(result) {
    localStorage.setItem(configHelper.storageKeys.token, result);
  }

  registerUser(result){
    localStorage.setItem(configHelper.storageKeys.user, result);
  }
}
