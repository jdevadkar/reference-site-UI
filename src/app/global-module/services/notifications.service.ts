import {
    Injectable
} from '@angular/core';

import { LoggerService } from '@core';

import { Subject } from 'rxjs/Subject';

import { FocusManagerModel } from '../focus-manager/index';
import { Observable } from 'rxjs';

@Injectable()
export class NotificationService {


  massageNotification: Subject<any> = new Subject<any>();

    productAddedToCartNotification: Subject<null> = new Subject<null>();
    productAddedToCartFromDialogNotification: Subject<null> = new Subject<null>();
    disableUINotification: Subject<null> = new Subject<null>();
    contentLoadedNotification: Subject<FocusManagerModel> = new Subject<FocusManagerModel>();

    constructor(
        private _logger: LoggerService
    ) {
        this._logger.info('NotificationService : constructor');
    }

    notifyProductAddedToCart() {
        this._logger.info('NotificationService : notifyNonCatalogProductAddedToCart');
        this.productAddedToCartNotification.next();
    }

    notifyProductAddedToCartFromDialog() {
        this._logger.info('NotificationService : notifyNonCatalogProductAddedToCart');
        this.productAddedToCartFromDialogNotification.next();
    }

    notifyEventContentLoaded(focusManagerModel?: FocusManagerModel) {
        this._logger.info('NotificationService : notifyEventContentLoaded');
        this.contentLoadedNotification.next(focusManagerModel);
    }

    notifyDisableUI() {
        this._logger.info('NotificationService : notifyDisableUI');
        this.disableUINotification.next();
    }


    sendMessage(message: string) {
      this._logger.info('NotificationService : sendMessage');
        this.massageNotification.next(message );
    }

    clearMessage() {
      this._logger.info('NotificationService : clearMessage');
        this.massageNotification.next();
    }

    getMessage(): Observable<any> {
      this._logger.info('NotificationService : getMessage');
        return this.massageNotification.asObservable();
    }
}
