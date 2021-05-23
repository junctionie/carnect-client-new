import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-my",
  templateUrl: "./my.component.html",
  styleUrls: ["./my.component.scss"],
})
export class MyComponent implements OnInit {
  user;

  reservation; // 주최한 예약
  participations; // 참가한 예약

  constructor(private rest: ApiService, private router: Router) {}

  async ngOnInit() {
    let user: any = window.localStorage.getItem("user");
    this.user = JSON.parse(user);

    console.log(this.user);

    await this.load_data();
  }

  async load_data() {
    const userId = this.user.userId;
    console.log(userId);
    this.reservation = await this.rest
      .get(`/reservations/${userId}`, {
        userId,
      })
      .toPromise();

    this.reservation = [this.reservation];

    this.participations = await this.rest
      .get(`/participations/${userId}`, {
        userId,
      })
      .toPromise();
  }

  async clickItem(reservationId) {
    this.router.navigateByUrl(`/reservation/${reservationId}`);
  }
}
