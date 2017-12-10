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
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingpageComponent,
    SidebarComponent,
    SidebarAuthorComponent,
    ArticleViewComponent,
    PortfolioViewComponent,
    AboutViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
