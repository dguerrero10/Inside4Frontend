import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrLineSeparatorComponent } from './or-line-separator.component';

describe('OrLineSeparatorComponent', () => {
  let component: OrLineSeparatorComponent;
  let fixture: ComponentFixture<OrLineSeparatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrLineSeparatorComponent]
    });
    fixture = TestBed.createComponent(OrLineSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
