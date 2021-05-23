import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.component.html",
  styleUrls: ["./reservation.component.scss"],
})
export class ReservationComponent implements OnInit {
  public reservation_list;

  constructor(private rest: ApiService, private router: Router) {}

  async ngOnInit() {
    this.reservation_list = await this.rest
      .get("/reservations/gets", {})
      .toPromise();
  }

  async clickItem(reservationId) {
    this.router.navigateByUrl(`/reservation/${reservationId}`);
  }
}
