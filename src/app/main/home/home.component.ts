import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import * as moment from "moment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public reservation = {
    destination: "",
    startDate: moment().format("YYYY-MM-DD"),
  };

  public reservation_list = [
    {
      text: "",
    },
    {
      text: "",
    },
    {
      text: "",
    },
    {
      text: "",
    },
    {
      text: "",
    },
    {
      text: "",
    },
    {
      text: "",
    },
    {
      text: "",
    },
    {
      text: "",
    },
  ];

  constructor(private router: Router, private rest: ApiService) {}

  async ngOnInit() {
    const reserv = await this.rest.get("/reservations/gets", {}).toPromise();

    console.log(reserv);
  }

  go_make_reservation() {
    this.router.navigateByUrl(
      `/make-reservation/${this.reservation.destination}/${this.reservation.startDate}`
    );
  }

  go_reservation() {
    this.router.navigateByUrl("/reservation");
  }

  clickItem() {
    this.router.navigateByUrl("/reservation/1");
  }
}
