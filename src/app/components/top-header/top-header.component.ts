import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromReducer from "./../../app.reducer";
import { SignIn, SignOut, IsSignIn } from "../../actions/auth.action";
import { ClearCart } from "../../actions/cart.action";
import { IAuth } from "src/app/app.model";
import { noUser } from "src/app/reducers/auth.reducer";
import { AuthActions, CartActions, LoaderActions } from "src/app/actions";
declare const gapi: any;
@Component({
  selector: "ecomm-top-header",
  templateUrl: "./top-header.component.html",
  styleUrls: ["./top-header.component.scss"],
})
export class TopHeaderComponent implements OnInit {
  ClientID: string =
    "506151065942-q0nsbjofc5oae7gretum0ar2ov9s29ln.apps.googleusercontent.com";

  constructor(private store: Store<fromReducer.AppState>) {}
  auth2: any;
  user: IAuth | undefined;
  isSignIn: boolean | undefined;
  cartSize: number = 0;
  
  googleInit() {
    gapi.load("client:auth2", () => {
      gapi.auth2
        .init({
          clientId: this.ClientID,
          scope: "profile email",
        })
        .then(() => {
          this.auth2 = gapi.auth2.getAuthInstance();
          this.onAuthChange();
          this.auth2.isSignedIn.listen(() => this.onAuthChange());
        });
    });
  }
  onAuthChange() {
    if (this.auth2 && this.auth2.isSignedIn.get()) {
      this.isSignIn = this.auth2.isSignedIn.get();
      this.user = {
        name: this.auth2.currentUser.get().getBasicProfile().getName(),
        givenname: this.auth2.currentUser
          .get()
          .getBasicProfile()
          .getGivenName(),
        familyname: this.auth2.currentUser
          .get()
          .getBasicProfile()
          .getFamilyName(),
        id: this.auth2.currentUser.get().getBasicProfile().getId(),
        img: this.auth2.currentUser.get().getBasicProfile().getImageUrl(),
        email: this.auth2.currentUser.get().getBasicProfile().getEmail(),
      };
    } else {
      this.user = noUser;
      this.isSignIn = false;
    }
    this.store.dispatch(AuthActions.SignIn({payload:this.user as any}));
    this.store.dispatch(AuthActions.IsSignIn({payload:this.isSignIn as any}));
  }
  onSignInClick() {
    this.auth2.signIn();
  }
  onSignOutClick() {
    this.auth2.signOut();
  }
  ngOnInit() {
    this.store.select(fromReducer.getIsSignIn).subscribe((isSignedIn) => {
      this.isSignIn = isSignedIn;
    });
    this.store.select(fromReducer.getUser).subscribe((user) => {
      this.user = user;
    });
    this.store.select(fromReducer.getCartSize).subscribe((size) => {
      this.cartSize = size;
    });
  }
  clearCart() {
    this.store.dispatch(CartActions.ClearCart());
  }
  onValChange(value: any) {
    console.log(value);
  }
  ngAfterViewInit() {
    this.googleInit();
  }
}
