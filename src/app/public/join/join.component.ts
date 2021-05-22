import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-join",
  templateUrl: "./join.component.html",
  styleUrls: ["./join.component.scss"],
})
export class JoinComponent implements OnInit {
  public user;

  constructor(private router: Router, private rest: ApiService) {}

  async ngOnInit() {
    let token = window.localStorage.getItem("token");
    const user = await this.rest.post("/user", { token }).toPromise();
    console.log(user);
    this.user = user;
    // console.log(user);
  }

  async go_login() {
    this.router.navigateByUrl("/join-user");
  }
}
