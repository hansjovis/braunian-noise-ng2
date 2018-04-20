import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCategoriesEditComponent } from './article-categories-edit.component';

describe('ArticleCategoriesEditComponent', () => {
  let component: ArticleCategoriesEditComponent;
  let fixture: ComponentFixture<ArticleCategoriesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCategoriesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCategoriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
