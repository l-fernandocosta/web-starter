import { http } from "@/@core/infra/http";

export class HttpGateway {
  constructor(private baseURL: string) {}

  public async get<Output>(url: string) {
    return await http.get<Output>(`${this.baseURL}/${url}`);
  }
}
