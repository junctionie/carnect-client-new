import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./main/home/home.component";
import { MakeReservationComponent } from "./main/make-reservation/make-reservation.component";
import { MyComponent } from "./main/my/my.component";
import { ReservationDetailComponent } from "./main/reservation-detail/reservation-detail.component";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import {
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatDialogModule,
  MatIconModule,
  MatFormFieldModule,
} from "@angular/material";
import { MainComponent } from "./main/main.component";
import { ReservationComponent } from "./main/reservation/reservation.component";
import { JoinUserComponent } from "./public/join-user/join-user.component";
import { JoinComponent } from "./public/join/join.component";
import { PublicComponent } from "./public/public.component";
import { StartComponent } from "./public/start/start.component";
import { LoginCallbackComponent } from "./public/login-callback/login-callback.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    JoinComponent,
    JoinUserComponent,
    HomeComponent,
    MakeReservationComponent,
    ReservationComponent,
    ReservationDetailComponent,
    MyComponent,
    MainComponent,
    PublicComponent,
    LoginCallbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
