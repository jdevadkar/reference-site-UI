import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationService } from '@global';
import { LoginModel } from 'app/login';
import { LoggerService } from '@core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit, OnDestroy {
  messages: any;
  subscription: Subscription[];

  constructor(private _notificationService: NotificationService,
    private _logger: LoggerService) {
      this.subscription = [];


    }

    ngOnInit() {

      this._logger.info('Comp2Component : ngOnInit');
      this.subscription.push(
        this._notificationService.massageNotification.subscribe((data) => {
          this.messages =data;
          console.log('data   : ' + JSON.stringify( this.messages));
     }),
    );

  }

  ngOnDestroy() {
    this.subscription.forEach((s) => {
        s.unsubscribe();
    });

}
}
