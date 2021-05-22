import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./src/main/home/home.component";
import { MainComponent } from "./src/main/main.component";
import { MakeReservationComponent } from "./src/main/make-reservation/make-reservation.component";
import { MyComponent } from "./src/main/my/my.component";
import { ReservationDetailComponent } from "./src/main/reservation-detail/reservation-detail.component";
import { ReservationComponent } from "./src/main/reservation/reservation.component";
import { StartComponent } from "./src/public/start/start.component";
import { JoinUserComponent } from "./src/public/join-user/join-user.component";
import { JoinComponent } from "./src/public/join/join.component";
import { PublicComponent } from "./src/public/public.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "", // header item 이 필요없는 애들
    component: PublicComponent,
    children: [
      { path: "start", component: StartComponent }, // 첫 화면 (키카오톡으로 로그인)``
      { path: "join", component: JoinComponent }, // 카톡 정보확인
      { path: "join-user", component: JoinUserComponent },
    ],
  },
  {
    path: "", // header가 필요함
    component: MainComponent,
    children: [
      { path: "home", component: HomeComponent }, // 가장 메인화면
      { path: "make-reservation", component: MakeReservationComponent }, // 예약하기
      { path: "reservation", component: ReservationComponent }, // 예약리스트
      {
        path: "reservation/:reservationId",
        component: ReservationDetailComponent,
      }, //예약리스트 상세
      { path: "my", component: MyComponent }, // 내 정보
    ],
  },
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
