import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCertificates } from './admin-certificates';

describe('AdminCertificates', () => {
  let component: AdminCertificates;
  let fixture: ComponentFixture<AdminCertificates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCertificates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCertificates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
