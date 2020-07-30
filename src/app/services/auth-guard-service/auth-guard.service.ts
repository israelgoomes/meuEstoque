import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { configHelper } from '../../configurations/configHelper';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate{


  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!localStorage.getItem(configHelper.storageKeys.token)) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
}
