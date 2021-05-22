import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
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
    await this.rest.get("/reservations", {}).toPromise();
  }

  go_make_reservation() {
    this.router.navigateByUrl("/make-reservation");
  }

  go_reservation() {
    this.router.navigateByUrl("/reservation");
  }

  clickItem() {
    this.router.navigateByUrl("/reservation/1");
  }
}
