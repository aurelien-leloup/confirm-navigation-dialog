import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfirmNavigationComponent } from './confirm-navigation.component';


@Injectable({
  providedIn: 'root'
})
export class ConfirmNavigationGuard implements CanDeactivate<ConfirmNavigationComponent> {
  canDeactivate(component: ConfirmNavigationComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.hasUnsavedData()) {
      component.displayConfirmDialog();
      return false;
    } else {
      return true;
    }
  }
}
