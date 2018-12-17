import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      if (!localStorage.getItem('token')) {
        this.router.navigate(['/signup']);
        return observer.next(false);
      } else {
        return observer.next(true);
      }
    });
  }
}