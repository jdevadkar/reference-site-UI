import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService, UtilityService } from '@core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


// HomeComponent is landing page of application, It provides routs to whcich user can navigate.
export class HomeComponent implements OnInit {

  constructor( private _router:Router, private _logger:LoggerService, private _utilityService: UtilityService ) {
    this._logger.info('HomeComponent : constructor ');
  }

  ngOnInit() {
    this._logger.info('HomeComponent : ngOnInit ');
  }

  // route to login page
  signIn()
  {
    this._logger.info('HomeComponent : signIn ');
    this._router.navigate(['/login']);
  }

  // route to registration page
  signUp()
  {
    this._logger.info('HomeComponent : signUp ');
    this._utilityService.openInNewTab('/register');
    // this._router.navigate(['/register']);
  }

  // route to about us page
  aboutUs()
  {
    this._logger.info('HomeComponent : aboutUs ');
    this._router.navigate(['/aboutus']);
  }

  getUrl() {
    return "url('./assets/Images/high tech home page.png')";
  }

  abc(){
    this._router.navigate(['/comp1']);
  }
}
