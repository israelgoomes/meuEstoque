import { Injectable } from '@angular/core';
import { Observable, config } from 'rxjs';
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

  registerUser(result) {
    localStorage.setItem(configHelper.storageKeys.user, result);
  }

  // teste(access_token): Observable<any> {
  //   let url = 'https://graph.facebook.com/me?fields=id,name,first_name,last_name,email&access_token=' + access_token;
  //   return this.http.get(url);
  // }

  logout() {
    localStorage.removeItem(configHelper.storageKeys.user);
    localStorage.removeItem(configHelper.storageKeys.token);
  }
}
