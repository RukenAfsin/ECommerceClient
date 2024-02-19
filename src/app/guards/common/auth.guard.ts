import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../services/ui/custom-toastr.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private jwtHelper: JwtHelperService,
    private router: Router,
    private toastrService: CustomToastrService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token: string = localStorage.getItem("accessToken");

    let expired: boolean;

    try {
      expired = this.jwtHelper.isTokenExpired(token);
    }
    catch {
      expired = true;
    }
    if (!token || expired) {
      this.router.navigate(["login"], { queryParams: { returnUrl: state.url } });
      this.toastrService.message("You should login", "Unauthorized access", {
        messageType: ToastrMessageType.Warning,
        position: ToastrPosition.TopRight
      })

    }
    return true;
  }
}
