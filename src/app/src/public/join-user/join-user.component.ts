import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-join-user",
  templateUrl: "./join-user.component.html",
  styleUrls: ["./join-user.component.scss"],
})
export class JoinUserComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  async go_login() {
    this.router.navigateByUrl("/home");
  }
}
