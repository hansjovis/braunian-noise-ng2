import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRowEditComponent } from './image-row-edit.component';

describe('ImageRowEditComponent', () => {
  let component: ImageRowEditComponent;
  let fixture: ComponentFixture<ImageRowEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageRowEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRowEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
