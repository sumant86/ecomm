import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveforlaterComponent } from './saveforlater.component';

describe('SaveforlaterComponent', () => {
  let component: SaveforlaterComponent;
  let fixture: ComponentFixture<SaveforlaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveforlaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveforlaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
