import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsInvitedSliderComponent } from './friends-invited-slider.component';

describe('FriendsInvitedSliderComponent', () => {
  let component: FriendsInvitedSliderComponent;
  let fixture: ComponentFixture<FriendsInvitedSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendsInvitedSliderComponent]
    });
    fixture = TestBed.createComponent(FriendsInvitedSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
