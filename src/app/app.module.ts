import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LandingViewComponent } from './views/landing-view/landing-view.component';

import { ArticleViewComponent } from './views/article-view/article-view.component';
import { ArticleListComponent } from './views/article-view/article-list/article-list.component';

import { PortfolioViewComponent } from './views/portfolio-view/portfolio-view.component';

import { AboutViewComponent } from './views/about-view/about-view.component';

import { ModalComponent } from './helper/modal/modal.component';

import { ArticleCategoryService } from './services/article-category-service/article-category.service';

import { HttpClientModule } from '@angular/common/http';

import { ArticleService } from './services/article-service/article.service';
import { PortfolioItemService } from './services/portfolio-item-service/portfolio-item.service';
import { AuthenticateService } from './services/authenticate-service/authenticate.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingViewComponent,
    ArticleViewComponent,
    PortfolioViewComponent,
    AboutViewComponent,
    FooterComponent,
    ModalComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ArticleService, 
    PortfolioItemService, 
    AuthenticateService,
    ArticleCategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
