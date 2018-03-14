import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingViewComponent } from './views/landing-view/landing-view.component';
import { ArticleViewComponent } from './views/article-view/article-view.component';
import { SingleArticleEditViewComponent } from './views/article-view/single-article-edit-view/single-article-edit-view.component';
import { SingleArticleViewComponent } from './views/article-view/single-article-view/single-article-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { PortfolioViewComponent } from './views/portfolio-view/portfolio-view.component';

const routes: Routes = [
  { path: 'articles', component: ArticleViewComponent },
  { path: 'articles/edit/:id', component: SingleArticleEditViewComponent},
  { path: 'articles/:id', component: SingleArticleViewComponent},
  { path: 'portfolio', component: PortfolioViewComponent },
  { path: 'about', component: AboutViewComponent },
  
  { path: '', component: LandingViewComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}