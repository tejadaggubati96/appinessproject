import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecomponentComponent } from './piecomponent.component';

describe('PiecomponentComponent', () => {
  let component: PiecomponentComponent;
  let fixture: ComponentFixture<PiecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
