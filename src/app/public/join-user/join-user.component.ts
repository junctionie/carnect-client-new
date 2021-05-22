import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-join-user",
  templateUrl: "./join-user.component.html",
  styleUrls: ["./join-user.component.scss"],
})
export class JoinUserComponent implements OnInit {
  public select;

  public status_list = [
    {
      text: "장애인",
      icon: "assets/disabled.png",
    },
    {
      text: "임산부",
      icon: "assets/pregnancy.png",
    },
    {
      text: "어린이",
      icon: "assets/baby-boy.png",
    },
    {
      text: "노약자",
      icon: "assets/old-man.png",
    },
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  async go_login() {
    this.router.navigateByUrl("/home");
  }

  click_item(item) {
    console.log(item);
    this.select = item;
  }
}
