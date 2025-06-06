import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAppUncontrolledComponent } from './form-app-uncontrolled.component';

describe('FormAppUncontrolledComponent', () => {
  let component: FormAppUncontrolledComponent;
  let fixture: ComponentFixture<FormAppUncontrolledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAppUncontrolledComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAppUncontrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
