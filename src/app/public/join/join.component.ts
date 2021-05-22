import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-join",
  templateUrl: "./join.component.html",
  styleUrls: ["./join.component.scss"],
})
export class JoinComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  async go_login() {
    this.router.navigateByUrl("/join-user");
  }
}
