import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEditCatDialogComponent } from './article-edit-cat-dialog.component';

describe('ArticleEditCatDialogComponent', () => {
  let component: ArticleEditCatDialogComponent;
  let fixture: ComponentFixture<ArticleEditCatDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleEditCatDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleEditCatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
