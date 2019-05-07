// created by PAS
import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { Constants } from '../infrastructure/constants';

import {
    ErrorCode,
    ErroNotificationType,
    HttpError,
    LoggerService,
    HttpService
} from '@core';

@Injectable()
export class NewsService {
    constructor(
        private _router: Router,
        private _logger: LoggerService,
        private _http:HttpService
    ) {
        this._logger.info('NewsService : constructor ');
    }

    getNews(requst : string) {
      this._logger.info('NewsService : getNews ');

      return this._http.get(`${Constants.webApis.getNews}` + requst + `${Constants.webApis.NewsToken}`);

    }


}
