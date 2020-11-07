import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
interface iamportResult {
  code: number;
  message: string;
  response: {
    access_token: string;
    now: number;
    expired_at: number;
  };
}
@Injectable({
  providedIn: "root"
})
export class IamportService {
  url = "https://73xv4fnqc6.execute-api.ap-northeast-2.amazonaws.com";
  constructor(private http: HttpClient) {}

  async getAccessToken() {
    return await this.http
      .post(`${this.url}/iamport/token`, {
        imp_key: "5945957538645824",
        imp_secret: "b7HvdCTJynjtT34gTJJsA1UKFREvKrlWy3rLFlvdJOHDRLTKuDc4E7PkYtPJVbFte7fTtK6cyOPqzJa4"
      })
      .toPromise();
  }

  getSupportList(token, payment_status = "all", limit = 20, sorting = "-started", page = 1) {
    return this.http.get(`${this.url}/iamport/payments?limit=${limit}&sorting=${sorting}&page=${page}&_token=${token}`);
  }
}
