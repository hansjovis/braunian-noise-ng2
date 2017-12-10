import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAuthorComponent } from './sidebar-author.component';

describe('SidebarAuthorComponent', () => {
  let component: SidebarAuthorComponent;
  let fixture: ComponentFixture<SidebarAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
