import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewreceiptComponent } from './viewreceipt.component';

describe('ViewreceiptComponent', () => {
  let component: ViewreceiptComponent;
  let fixture: ComponentFixture<ViewreceiptComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
