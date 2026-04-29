import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEducation } from './admin-education';

describe('AdminEducation', () => {
  let component: AdminEducation;
  let fixture: ComponentFixture<AdminEducation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEducation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEducation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
