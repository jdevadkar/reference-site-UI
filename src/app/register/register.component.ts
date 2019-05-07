import { Component, OnInit } from "@angular/core";
import { RegisterModel } from "./register.model";

import {
  LoggerService,
  UtilityService,
  ToastrService,
  ToastrCode,
  ValidationService
} from "@core";
import { environment } from "@env";
import { RegisterService } from "./register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
  providers: [RegisterService]
})

// Used for creating new Employee by accepting inputs from User
export class RegisterComponent implements OnInit {
  model: RegisterModel;
  date: Date = new Date();

  constructor(
    private _logger: LoggerService,
    private _utilityService: UtilityService,
    private _toastrService: ToastrService,
    private _registerService: RegisterService,
    private _validationService: ValidationService
  ) {
    this._logger.info("RegisterComponent : constructor ");
    this.model = new RegisterModel();
  }

  ngOnInit() {
    this._logger.info("RegisterComponent : ngOnInit ");
  }

  // Does basic validation and calls api for registration
  register() {
    this._logger.info("RegisterComponent : register ");

    if (!this.model.name) {
      this._toastrService.showError(ToastrCode.EmptyUserName);
    } else if (!this.model.email) {
      this._toastrService.showError(ToastrCode.EmptyEmailAddress);
    } else if (!this.model.password) {
      this._toastrService.showError(ToastrCode.EmptyPassword);
    } else {
      if (this._validationService.isEmail(this.model.email)) {
        this._registerService.regOn(this.model).subscribe(
          successResponse => {
            this._logger.info(
              "RegisterComponent_loginService.logOn : successResponse "
              );
              this._toastrService.showSuccess(ToastrCode.UserRegistered);


          },
          errorResponse => {
            this._logger.info(
              "RegisterComponent_loginService.logOn : errorResponse "
            );
            this._toastrService.showError("Email Id alredy Exist");
          }
        );
      } else {
        this._toastrService.showError(ToastrCode.ValidEmailAddress);
      }
    }
  }

  // Resets registration model
  resetModel() {
    this._logger.info("RegisterComponent : resetModel ");
    this.model.email = "";
    this.model.password = "";
    this.model.name = "";
  }

  goToLogin()
  {
this._utilityService.redirectToURL("http://localhost:4200/login");
  }

  getUrl() {
    return "url('./assets/Images/register.png')";
  }
}
