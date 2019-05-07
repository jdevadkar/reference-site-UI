import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@global';
import { Router } from '@angular/router';
import { LoggerService } from '@core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {


  constructor( private _notificationService: NotificationService,
    private _router: Router,
    private _logger:LoggerService) { }

  ngOnInit() {
  }

  sendMessage() {
    this._logger.info('Comp1Component : sendMessage');
    this._notificationService.sendMessage("Message from Home Component to App Component!");


    }

    clearMessage(): void {
      this._logger.info('Comp1Component : clearMessage');
      // clear message
      this._notificationService.clearMessage();
  }

}
