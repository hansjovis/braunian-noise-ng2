import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Landing page.
import { LandingViewComponent } from './views/landing/landing-view.component';

import { ArticleViewComponent } from './views/articles/article-overview/article-overview.component';
  import { SingleArticleEditViewComponent } from './views/articles/single-article/edit/single-article-edit-view.component';
  import { SingleArticleViewComponent } from './views/articles/single-article/view/single-article.component';

import { AboutViewComponent } from './views/about/about-view.component';

import { PortfolioViewComponent } from './views/portfolio/portfolio-view.component';

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