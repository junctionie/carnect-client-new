import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.component.html",
  styleUrls: ["./reservation.component.scss"],
})
export class ReservationComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}
}
