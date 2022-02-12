import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GenericDialogComponent } from "./generic-dialog.component";
import { MaterialModule } from "../../modules/material.module";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
describe("GenericDialogComponent", () => {
  let component: GenericDialogComponent;
  let fixture: ComponentFixture<GenericDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule],
      declarations: [GenericDialogComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            close: (dialogResult: any) => {}
          }
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            close: (dialogResult: any) => {}
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
