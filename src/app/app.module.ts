import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./src/main/home/home.component";
import { MakeReservationComponent } from "./src/main/make-reservation/make-reservation.component";
import { MyComponent } from "./src/main/my/my.component";
import { ReservationDetailComponent } from "./src/main/reservation-detail/reservation-detail.component";
import { ReservationComponent } from "./src/main/reservation/reservation.component";
import { StartComponent } from "./src/public/start/start.component";
import { JoinUserComponent } from "./src/public/join-user/join-user.component";
import { JoinComponent } from "./src/public/join/join.component";
import { MainComponent } from "./src/main/main.component";
import { PublicComponent } from "./src/public/public.component";
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
} from "@angular/material";

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
