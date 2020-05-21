import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MaterialModule } from "../../modules/material.module";
import { StoreModule } from "@ngrx/store";
import * as fromReducer from "../../app.reducer";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoaderComponent } from "./loader.component";

describe("LoaderComponent", () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(fromReducer.reducers)
      ],
      declarations: [LoaderComponent],
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
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
