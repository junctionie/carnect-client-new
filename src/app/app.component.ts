import { Component } from "@angular/core";
declare var Kakao;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "carnect-client-newww";

  async ngOnInit() {
    Kakao.init("0b8e7cd27baa620364eb9d8aac322f32");

    let broswerInfo = navigator.userAgent;
    if (
      broswerInfo.indexOf("app_pomelove") > -1 ||
      broswerInfo.indexOf("iPhone") > -1 ||
      broswerInfo.indexOf("Android") > -1
    ) {
    } else {
      // Snowflakes();
    }
  }
}
