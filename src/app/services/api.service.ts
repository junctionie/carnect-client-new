import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs";
import { HttpParams } from "@angular/common/http";

const endpoint =
  "http://ec2-3-34-115-26.ap-northeast-2.compute.amazonaws.com:3000";
const httpOptions = {
  headers: new HttpHeaders({ "Access-Control-Allow-Origin": "*" }),
  params: new HttpParams(),
};

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private extractData(res: any) {
    //error
    if (res.status === 0) {
      throw res.error;
    }
    let body = res;
    return body || {};
  }

  private handleError(error) {
    if (error && error.error instanceof ErrorEvent) {
      // alert("서버오류 : " + error.message);
      // A client-side or network error occurred. Handle it accordingly.
    } else {
      // alert("코드: " + error.error_number + ", 메세지: " + error.error_msg);
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log("error number = " + error.error_number);

      if (error.error_number == "001") {
        console.log("error gogo");
      }
    }
    console.log(error);
    // return an observable with a user-facing error message
    return throwError(error);
  }

  post(uri, param, data?) {
    const url = endpoint + uri;
    return this.http
      .post(url, param, httpOptions)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  get(uri, param?) {
    const url = endpoint + uri;

    const options = { params: new HttpParams().set("name", "hello") };

    console.log(url);
    return this.http
      .get(url, httpOptions)
      .pipe(map(this.extractData), catchError(this.handleError));
  }
}
