import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHomeComponent } from './sidebar-home.component';

describe('SidebarHomeComponent', () => {
  let component: SidebarHomeComponent;
  let fixture: ComponentFixture<SidebarHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarHomeComponent]
    });
    fixture = TestBed.createComponent(SidebarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
