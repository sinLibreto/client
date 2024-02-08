import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostReeliestComponent } from './post-reeliest.component';

describe('PostReeliestComponent', () => {
  let component: PostReeliestComponent;
  let fixture: ComponentFixture<PostReeliestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostReeliestComponent]
    });
    fixture = TestBed.createComponent(PostReeliestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
