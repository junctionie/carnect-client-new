import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  go_my() {
    this.router.navigateByUrl("/my");
  }

  go_home() {
    this.router.navigateByUrl("/home");
  }
}
