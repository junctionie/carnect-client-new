import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
declare var Kakao;
@Component({
  selector: "app-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.scss"],
})
export class StartComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  async go_login() {
    try {
      const self = this;
      Kakao.Auth.login({
        success: function (authObj) {
          let {
            access_token,
            refresh_token,
            token_type,
            expires_in,
            scope,
            refresh_token_expires_in,
          } = authObj;
          Kakao.API.request({
            url: "/v2/user/me",
            success: async (resultObj) => {
              // alert(resultObj);
              // const result = await self.db.login_social(
              //   resultObj.id + "",
              //   access_token
              // );
              this.router.navigateByUrl("/join");
            },

            fail: (errorObj) => {
              console.log(errorObj);
              alert(errorObj);
              // self.app.go('login');
            },
            always: () => {
              // loading.dismiss();
            },
          });
        },
        fail: function (err) {
          alert(JSON.stringify(err));
          // self.app.go('');
        },
      });
    } catch (e) {
      console.log(e);
      alert(e);
    }
  }
}
