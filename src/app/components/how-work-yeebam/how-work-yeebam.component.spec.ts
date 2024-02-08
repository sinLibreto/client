import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWorkYeebamComponent } from './how-work-yeebam.component';

describe('HowWorkYeebamComponent', () => {
  let component: HowWorkYeebamComponent;
  let fixture: ComponentFixture<HowWorkYeebamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowWorkYeebamComponent]
    });
    fixture = TestBed.createComponent(HowWorkYeebamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
