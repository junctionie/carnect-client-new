import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-make-reservation",
  templateUrl: "./make-reservation.component.html",
  styleUrls: ["./make-reservation.component.scss"],
})
export class MakeReservationComponent implements OnInit {
  public data: any = {};
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rest: ApiService
  ) {}

  async ngOnInit() {
    const destination = this.route.snapshot.params["destination"];
    const startDate = this.route.snapshot.params["startDate"];
    console.log(destination);

    this.data = {
      destination,
      startDate,
    };
    const data = {
      userId: 4,
      startDate: "2021-05-29 02:11:02",
      endDate: "2021-05-29 02:11:09",
      limitPersonCount: 5,
      description: "우왕 굳",
    };
  }

  async make_reservation() {
    if (
      !this.data.destination ||
      !this.data.startDate ||
      !this.data.endDate ||
      !this.data.start
    ) {
      alert("필수 항목을 모두 입력해주세요!");
    }

    let user: any = window.localStorage.getItem("user");
    console.log(user);
    user = JSON.parse(user);
    if (!user) {
      alert("유저를 찾을 수 없습니다! 다시 로그인 해주세요 :)");
      this.router.navigateByUrl("/start");
    }

    this.data.userId = user.userId;
    this.data.limitPersonCount = 5;

    try {
      const result = await this.rest
        .post("/reservations", this.data)
        .toPromise();

      if (result) {
        alert("예약에 성공하셨습니다!");
        this.router.navigateByUrl("/home");
      }
    } catch (e) {
      alert(e.error.message);
    }

    console.log(this.data);
  }
}
