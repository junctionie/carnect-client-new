import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-reservation-detail",
  templateUrl: "./reservation-detail.component.html",
  styleUrls: ["./reservation-detail.component.scss"],
})
export class ReservationDetailComponent implements OnInit {
  reservationId;
  data;
  remain_time;

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private rest: ApiService
  ) {
    this.reservationId = this.route.snapshot.params["reservationId"];
  }

  async ngOnInit() {
    console.log(this.reservationId);
    this.data = await this.rest
      .get(`/reservations/${this.reservationId}`, {
        reservationId: this.reservationId,
      })
      .toPromise();
    console.log(this.data);

    this.remain_time = moment(this.data.endDate).diff(moment(), "days");

    console.log(moment(this.data.endDate).diff(moment(), "days"));
  }

  async load_data() {}

  async participations(reservationId) {
    let user: any = window.localStorage.getItem("user");
    user = JSON.parse(user);

    const data = {
      userId: user.userId,
      reservationId,
    };

    try {
      await this.rest.post("/participations", data).toPromise();
      alert("참가 등록되었습니다.");
      this._router.navigateByUrl("/home");
    } catch (err) {
      alert("참가가 불가합니다" + err);
    }
  }
}
