import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigetionComponent } from './navigetion.component';

describe('NavigetionComponent', () => {
  let component: NavigetionComponent;
  let fixture: ComponentFixture<NavigetionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigetionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
