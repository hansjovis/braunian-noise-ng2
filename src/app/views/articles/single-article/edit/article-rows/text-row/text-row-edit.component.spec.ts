import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRowEditComponent } from './text-row-edit.component';

describe('TextRowEditComponent', () => {
  let component: TextRowEditComponent;
  let fixture: ComponentFixture<TextRowEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextRowEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextRowEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
