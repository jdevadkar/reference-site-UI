import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoggerService } from '../services/logger.service';
import { Constants } from '@shared/infrastructure/constants';

@Injectable()
export class ValidationService {
    constructor(
        private _logger: LoggerService
    ) {
        this._logger.info('ValidationService : constructor ');
    }

    public isNumberKey(event: any): boolean {
        this._logger.info('ValidationService : isNumberKey ');
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57) && !event.ctrlKey) {
            return false;
        }

        return true;
    }

    public isEnterKey(event: any): boolean {
        this._logger.info('ValidationService : isEnterKey ');
        return ((event.keyCode || event.which) === 13);
    }

    public isEmail(mail: any): boolean {
      this._logger.info('ValidationService : isEmail ');

      return this.validateInput(mail, Constants.regExType.email);
      // return true;

  }
  validateInput = (inputValue: string, regx: RegExp): boolean => {
    return this.regExpValidator(regx.source, inputValue);
}

    public regExpValidator = (regExPattern: string, valueToValidate: string, flags?: string): boolean => {
        this._logger.info('ValidationService: regExpValidator ' + valueToValidate);
        const regEx: RegExp = new RegExp(regExPattern, flags || '');
        var a =regEx.test(valueToValidate);
        console.log(a);
        return regEx.test(valueToValidate); // test and set the validity after update.
    }
}
