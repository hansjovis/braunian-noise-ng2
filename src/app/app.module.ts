import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { ArticleViewComponent } from './views/article-view/article-view.component';
import { PortfolioViewComponent } from './views/portfolio-view/portfolio-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';

import { SidebarComponent } from './sidebar/sidebar.component';

import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ArticleService } from './services/article-service/article.service';
import { PortfolioItemService } from './services/portfolio-item-service/portfolio-item.service';
import { AuthenticateService } from './services/authenticate-service/authenticate.service';

import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './helper/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingViewComponent,
    SidebarComponent,
    ArticleViewComponent,
    PortfolioViewComponent,
    AboutViewComponent,
    FooterComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ArticleService, 
    PortfolioItemService, 
    AuthenticateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
