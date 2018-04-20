import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArticleEditViewComponent } from './single-article-edit-view.component';

describe('SingleArticleEditViewComponent', () => {
  let component: SingleArticleEditViewComponent;
  let fixture: ComponentFixture<SingleArticleEditViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleArticleEditViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArticleEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
