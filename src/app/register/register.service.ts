import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { LoggerService, HttpService } from "@core";

import { Constants } from "@shared";

@Injectable()
export class RegisterService {
  constructor(private _http: HttpService, private _logger: LoggerService) {
    this._logger.info("RegisterService : constructor ");
  }
// calling register API
  regOn(request: any): Observable<any> {
    this._logger.info("RegisterService : regOn ");
    console.log(request);
    return this._http.post(`${Constants.webApis.register}`, request);
  }
}
