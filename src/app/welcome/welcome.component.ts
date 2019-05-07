import { Component, OnInit } from '@angular/core';
import { LoggerService, ToastrService } from '@core';
import { SharedDataService, SharedData } from '@global';
import { NewsService } from '@global/services/news.service';

@Component({
  moduleId: module.id,
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})


// Displays employee dashboard after successful authentication
export class WelcomeComponent implements OnInit {
  hobbies: string;
  interest: string;
  currentUser: SharedData;
  news: any;
  headlines: any = "Headlines";


  constructor(private _logger: LoggerService,
    private _toastrService: ToastrService,
    private _sharedDataService: SharedDataService,
    private _newsService: NewsService,) {
    this._logger.info('WelcomeComponent :  constructor');
  }

  // gets loggend in employee's details useing SharedDataService
  ngOnInit() {
    this._logger.info('WelcomeComponent : ngOnInit ');
    this.currentUser = this._sharedDataService._sharedData;
    this.interests();


  }

  // fetches employee's hobbie related articles/news by calling NewsService
  hobbie(){
    this._logger.info('WelcomeComponent : hobbiesRelatedNews ');
    this.headlines=this.currentUser.hobbies;
     this._newsService.getNews(this.currentUser.hobbies).subscribe((successResponse)=>{
      this._logger.info('hobbiesRelatedNews : successResponse ');
      this.news = successResponse.json();
      console.log(this.news);
    },
    (errorResponse) => {
      this._logger.info('hobbiesRelatedNews : errorResponse ');


    });

  }
 // fetches employee's interest related articles/news by calling NewsService
 interests() {
    this._logger.info('WelcomeComponent : interestRelatedNews ');
    this.headlines=this.currentUser.interest;
    this._newsService.getNews(this.currentUser.interest).subscribe((successResponse)=>{
      this._logger.info('interestRelatedNews : successResponse ');
      this.news = successResponse.json();
      console.log(successResponse);
    },
    (errorResponse) => {
      this._logger.info('WelcomeComponent : errorResponse ');
      this._toastrService.showError('No Data ');
    });
  }

  india(){
    this._logger.info('WelcomeComponent :  india');
    this.headlines = 'India';
    this._newsService.getNews(this.headlines).subscribe((successResponse) => {
      this._logger.info('WelcomeComponent :  successResponse');
      this.news = successResponse.json();

    },
    (errorResponse) => {
      this._logger.info('WelcomeComponent :  errorResponse');

    });


  }

  world(){
    this._logger.info('WelcomeComponent :  world');
    this.headlines = 'World';
    this._newsService.getNews(this.headlines).subscribe((successResponse) => {
      this._logger.info('WelcomeComponent :  successResponse');
      this.news = successResponse.json();

    },
    (errorResponse) => {
      this._logger.info('WelcomeComponent :  errorResponse');

    });
  }
  technology(){
    this._logger.info('WelcomeComponent :  technology');
    this.headlines = 'Technology';
    this._newsService.getNews(this.headlines).subscribe((successResponse) =>{
      this._logger.info('WelcomeComponent :  successResponse');
      this.news = successResponse.json();

    },
    (errorResponse) => {
      this._logger.info('WelcomeComponent :  errorResponse');
    });

  }
  health(){
    this._logger.info('WelcomeComponent :  health');
    this.headlines = 'Health';
    this._newsService.getNews(this.headlines).subscribe((successResponse) => {
      this._logger.info('WelcomeComponent :  successResponse');
      this.news = successResponse.json();
    },
    (errorResponse) => {
      this._logger.info('WelcomeComponent :  errorResponse');
    })

  }
  science(){
    this._logger.info('WelcomeComponent :  science');
    this.headlines = 'Science';
    this._newsService.getNews(this.headlines).subscribe((successResponse) => {
      this._logger.info('WelcomeComponent :  successResponse');
      this.news =successResponse.json();


    },
    (errorResponse) => {
      this._logger.info('WelcomeComponent :  errorResponse');


    })
  }


}
