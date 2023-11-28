import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelNavComponent } from './side-panel-nav.component';

describe('SidePanelNavComponent', () => {
  let component: SidePanelNavComponent;
  let fixture: ComponentFixture<SidePanelNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidePanelNavComponent]
    });
    fixture = TestBed.createComponent(SidePanelNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
