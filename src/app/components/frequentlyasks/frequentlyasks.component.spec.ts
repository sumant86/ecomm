import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyasksComponent } from './frequentlyasks.component';

describe('FrequentlyasksComponent', () => {
  let component: FrequentlyasksComponent;
  let fixture: ComponentFixture<FrequentlyasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentlyasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentlyasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
