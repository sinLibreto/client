import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedFriendsSliderComponent } from './suggested-friends-slider.component';

describe('SuggestedFriendsSliderComponent', () => {
  let component: SuggestedFriendsSliderComponent;
  let fixture: ComponentFixture<SuggestedFriendsSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestedFriendsSliderComponent]
    });
    fixture = TestBed.createComponent(SuggestedFriendsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
