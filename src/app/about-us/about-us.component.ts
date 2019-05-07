import { Component, OnInit } from '@angular/core';
import { LoggerService, GlobalErrorLoggingService } from '@core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})

//Displays information about organization
export class AboutUsComponent implements OnInit {

  constructor(private _logger:LoggerService, private _globalErrorHandler:GlobalErrorLoggingService) {
    this._logger.info('AboutUsComponent : constructor ');
  }

  ngOnInit() {
    this._logger.info('AboutUsComponent : ngOnInit ');
  }

  organizationStructure(){
    this._logger.info('AboutUsComponent : organizationStructure ');

     // using global Error handler logging service to open up dailog box
     this._globalErrorHandler.showErrorDialog(
      "Sorry..!",             //Error Dialog Title
      "Work in Progress",     //Custom Error Message
      "Go to Home",          //Primary Button Text
      true,                   //is Logout On Primary Button Event
      true,                   //is Show Secondary Button
      " ok"                   //secondary Button Text
    );
  }

  getUrl() {
    return "url('./assets/Images/UST aboutus.png')";
  }
}
