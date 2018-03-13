import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Resolve,CanActivateChild,CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}

interface user {
  name: string;
  id: number;
}

export class AuthGuard implements CanActivate, Resolve<user>, CanActivateChild, CanDeactivate<CanComponentDeactivate> {

  constructor(){}


  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  canActivateChild(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    return false;
  }

  canDeactivate(component: CanComponentDeactivate, router: ActivatedRouteSnapshot, state: RouterStateSnapshot, nextstate: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }

  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<user> | Promise<user> | user
  {
    return null;
  }

}
