import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCoveredComponent } from './courses-covered.component';

describe('CoursesCoveredComponent', () => {
  let component: CoursesCoveredComponent;
  let fixture: ComponentFixture<CoursesCoveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesCoveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesCoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
