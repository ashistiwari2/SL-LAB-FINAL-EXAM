import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileUsageComponent } from './mobile-usage.component';

describe('MobileUsageComponent', () => {
  let component: MobileUsageComponent;
  let fixture: ComponentFixture<MobileUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileUsageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
