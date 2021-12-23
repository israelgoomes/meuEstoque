import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { configHelper } from 'src/app/configurations/configHelper';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoginService {


  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (localStorage.getItem(configHelper.storageKeys.token)) {
      this.router.navigate(['/products']);
      return false;
    }

    return true;
  }
}
