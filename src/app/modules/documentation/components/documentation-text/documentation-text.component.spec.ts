import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationTextComponent } from './documentation-text.component';

describe('DocumentationTextComponent', () => {
  let component: DocumentationTextComponent;
  let fixture: ComponentFixture<DocumentationTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentationTextComponent]
    });
    fixture = TestBed.createComponent(DocumentationTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
