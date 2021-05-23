import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
declare var Kakao;
@Component({
  selector: "app-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.scss"],
})
export class StartComponent implements OnInit {
  constructor(private router: Router, private rest: ApiService) {}

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
            success: async (resultObj: any) => {
              // alert(resultObj);
              // const result = await self.db.login_social(
              //   resultObj.id + "",
              //   access_token
              // );
              console.log(resultObj);
              const token = await self.rest
                .post("/login", { id: resultObj.id, access_token })
                .toPromise();
              self.router.navigateByUrl(`/login-callback/${token}`);
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
