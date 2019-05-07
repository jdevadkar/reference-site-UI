import { ModuleWithProviders } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "@core";

import { AuthGuardService } from "@global";

import { Constants } from "@shared";

import { ProductComponent } from "./shop-module/product/product.component";
import { OfferComponent } from "./shop-module/offer/offer.component";
import { InvoiceComponent } from "./order-module/invoice/invoice.component";
import { OrderComponent } from "./order-module/order/order.component";
import { LoginComponent } from "./login";
import { HomeComponent } from "./home/home.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { RegisterComponent } from "./register/register.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

const appRoutes: Routes = [
  // Public part of an application
  {
    path: Constants.uiRoutes.empty,
    component: HomeComponent
  },
  {
    path: 'comp2',
    component: Comp2Component
  },
  {
    path: 'comp1',
    component: Comp1Component
  },
  {
    path: Constants.uiRoutes.login,
    component: LoginComponent
  },
  {
    path: Constants.uiRoutes.aboutus,
    component: AboutUsComponent
  },
  {
    path: Constants.uiRoutes.register,
    component: RegisterComponent
  },
  // Private part of an application
  {
    path: Constants.uiRoutes.welcome,
    component: WelcomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: Constants.uiRoutes.product,
    component: ProductComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: Constants.uiRoutes.offer,
    component: OfferComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: Constants.uiRoutes.order,
    component: OrderComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: Constants.uiRoutes.invoice,
    component: InvoiceComponent,
    canActivate: [AuthGuardService]
  },
  // navigates to PageNotFoundComponent if url not found
  {
    path: "**",
    component: PageNotFoundComponent,
    canActivate: [AuthGuardService]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
