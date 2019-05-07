import { Injectable } from '@angular/core';

import {
    NGXLogger,
    CustomNGXLoggerService,
    NgxLoggerLevel
 } from 'ngx-logger';
import { Constants } from '@shared/infrastructure/constants';


 @Injectable()
export class LoggerService {
    private _logger: NGXLogger;

    // TODO - drive the logger level via environments/environment config
    constructor(customLogger: CustomNGXLoggerService) {
      this._logger = customLogger.create(
        {
            serverLoggingUrl: `${Constants.webApis.serverLoggingUrl}`,
            level: NgxLoggerLevel.INFO,
            serverLogLevel: NgxLoggerLevel.INFO
        });
    }

    // TODO - maintain array of last 100 log info messages
    info(message: string) {
        this._logger.info(message);
    }

    // TODO - append the message with last 100 log info messages
    // Note - logger.error to be called only when we want log to post to server
    error(message: string) {
        this._logger.error(message);
    }
}
