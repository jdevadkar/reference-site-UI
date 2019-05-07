import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';

import { CoreModule } from '@core/core.module';
import { GlobalModule } from '@global/global.module';
import { SharedModule } from '@shared/shared.module';

import { routing } from './app.routing';
import { ShopModule } from './shop-module/shop.module';
import { OrderModule } from './order-module/order.module';

import { LoginComponent } from './login/index';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WelcomeComponent,
    RegisterComponent,
    AboutUsComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CoreModule.forRoot(
      { environmentName: environment.environmentName
        , apiTokenUrl: ''
        , appUrl: environment.appUrl
        , domain: environment.domain
      }),
    GlobalModule.forRoot(),
    SharedModule,
    routing,
    ShopModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
