import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";

import { LoggerService } from "@core";

import {
  HttpError,
  ErrorCode,
  ToastrCode,
  ErroNotificationType,
  ToastrService,
  AuthService
} from "@core";

import { Constants } from "@shared";

import { LoginModel } from "./login.model";

import { LoginService } from "./login.service";


import { SharedDataService } from "@global";

@Component({
  moduleId: module.id,
  selector: "login-app",
  templateUrl: "login.component.html",
  providers: [LoginService]
})

// Handles login functionality
export class LoginComponent implements OnInit {
  model: LoginModel;
  showLogin = false;
  name: String;

  constructor(
    private _router: Router,
    private _loginService: LoginService,
    private _logger: LoggerService,
    private _toastrService: ToastrService,
    private _authServiece: AuthService,
    private _sharedDataService: SharedDataService
  ) {
    this._logger.info("LoginComponent : constructor ");
    this.model = new LoginModel();
    this.model.isAuthInitiated = false;
  }

  //Navigates user to welcome page if already logged in
  ngOnInit() {
    this._logger.info("LoginComponent : ngOnInit ");
    this.showLogin = true;

    if (this._authServiece.isUserLoggedIn()) {
      this._router.navigate([Constants.uiRoutes.welcome]);
    }
  }


  // does basic validation and calls api for authentication of credentials using loginService.
  login() {
    this._logger.info("LoginComponent : login ");
    this.model.isAuthInitiated = true;
    if (!this.model.emailAddress) {
      this.model.isAuthInitiated = false;
      this._toastrService.showError(ToastrCode.EmptyEmailAddress);
    } else if (!this.model.password) {
      this.model.isAuthInitiated = false;
      this._toastrService.showError(ToastrCode.EmptyPassword);
    } else {
      this.model.isAuthInitiated = true;
      this._loginService
        .logOn({
          email: this.model.emailAddress,
          password: this.model.password
        })
        .subscribe(
          successResponse => {
            this._logger.info(
              "LoginComponent_loginService.logOn : successResponse "
            );
            const response = successResponse.json();
            // this.name = response.name;
            this._sharedDataService._sharedData = response;
            console.log(this.name);
            console.log(response);
            response.code = "";
            this.model.isAuthInitiated = false;
            console.log(successResponse);
            this.processLoginRequest(successResponse);
          },
          errorResponse => {
            this.resetModel();
            this._logger.error(
              "LoginComponent_loginService.logOn : errorResponse "
            );
            this.model.isAuthInitiated = false;
            throw new HttpError(
              ErrorCode.AuthFailedInvalidAuthResponse,
              ErroNotificationType.Dialog,
              errorResponse
            );
          }
        );
    }
  }
// After authentication routes user to welcome page
  processLoginRequest(response: any) {
    this._logger.info("LoginComponent : processLoginRequest ");
    if (response) {
      // *Commented by PAS Team as this site dosent maintain apiTokens *
      console.log(response);

      localStorage.setItem(Constants.localStorageKeys.isLoggedIn, 'true');
      localStorage.setItem(Constants.localStorageKeys.apiToken, JSON.stringify(response._body.apiToken));
      // localStorage.setItem(Constants.localStorageKeys.sessionId, response._body.apiToken.sessionId);
      // this._utilityService.redirectToURL(environment.appUrl);
      this._router.navigate(["/welcome"]);
    }
  }

  // resets fields
  resetModel() {
    this._logger.info("LoginComponent : resetModel ");
    this.model.emailAddress = "";
    this.model.password = "";
  }

  getUrl() {
    return "url('./assets/Images/bg_sign-in.png')";
  }
}
