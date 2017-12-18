import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarAuthorComponent } from './sidebar-author/sidebar-author.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';

import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ArticleService } from './article.service';
import { AuthenticateService } from './authenticate.service';
import { PortfolioItemService } from './portfolio-item.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingpageComponent,
    SidebarComponent,
    SidebarAuthorComponent,
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
