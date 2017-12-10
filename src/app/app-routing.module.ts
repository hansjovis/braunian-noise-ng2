import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';

const routes: Routes = [
  { path: 'articles', component: ArticleViewComponent },
  { path: 'portfolio', component: PortfolioViewComponent },
  { path: 'about', component: AboutViewComponent },
  
  { path: '', component: LandingpageComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}