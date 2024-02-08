import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReeliesComponent } from './reelies.component';

describe('ReeliesComponent', () => {
  let component: ReeliesComponent;
  let fixture: ComponentFixture<ReeliesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReeliesComponent]
    });
    fixture = TestBed.createComponent(ReeliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
