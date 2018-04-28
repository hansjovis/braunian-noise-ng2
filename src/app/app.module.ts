import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LandingViewComponent } from './views/landing/landing-view.component';

import { ArticleViewComponent } from './views/articles/article-overview/article-overview.component';
import { ArticleListComponent } from './views/articles/article-overview/article-list/article-list.component';

import { PortfolioViewComponent } from './views/portfolio/portfolio-view.component';

import { AboutViewComponent } from './views/about/about-view.component';

import { ModalComponent } from './helper/modal/modal.component';

import { ArticleCategoryService } from './services/article-category-service/article-category.service';

import { HttpClientModule } from '@angular/common/http';

import { NewArticleService } from './services/new-article-service/new-article.service';
import { PortfolioItemService } from './services/portfolio-item-service/portfolio-item.service';
import { AuthenticateService } from './services/authenticate-service/authenticate.service';

import { ArticleCategoriesComponent } from './views/articles/article-overview/article-categories/article-categories.component';
import { ArticleEditCatDialogComponent } from './views/articles/article-overview/article-categories/article-edit-cat-dialog/article-edit-cat-dialog.component';

import { SingleArticleViewComponent } from './views/articles/single-article/view/single-article.component';

import { SingleArticleEditViewComponent } from './views/articles/single-article/edit/single-article-edit-view.component';


import { TextRowEditComponent } from './views/articles/single-article/edit/article-rows/text-row/text-row-edit.component';
import { ImageRowEditComponent } from './views/articles/single-article/edit/article-rows/image-row/image-row-edit.component';
import { ArticleCategoriesEditComponent } from './views/articles/single-article/edit/article-categories-edit/article-categories-edit.component';
import { TextRowComponent } from './views/articles/single-article/view/article-rows/text-row/text-row.component';
import { ImageRowComponent } from './views/articles/single-article/view/article-rows/image-row/image-row.component';
import { DeleteArticleDialogComponent } from './views/articles/article-overview/article-list/delete-article-dialog/delete-article-dialog.component';

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
    ArticleListComponent,
    ArticleEditCatDialogComponent,
    SingleArticleViewComponent,
    SingleArticleEditViewComponent,
    ArticleCategoriesComponent,
    TextRowEditComponent,
    ImageRowEditComponent,
    ArticleCategoriesEditComponent,
    TextRowComponent,
    ImageRowComponent,
    DeleteArticleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PortfolioItemService, 
    AuthenticateService,
    ArticleCategoryService,
    NewArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
