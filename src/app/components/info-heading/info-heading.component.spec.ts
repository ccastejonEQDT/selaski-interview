import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHeadingComponent } from './info-heading.component';

describe('InfoHeadingComponent', () => {
  let component: InfoHeadingComponent;
  let fixture: ComponentFixture<InfoHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoHeadingComponent]
    });
    fixture = TestBed.createComponent(InfoHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
