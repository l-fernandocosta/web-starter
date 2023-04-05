import { http } from "@/@core/infra/http";
import { Container } from "inversify";

export const HttpRegistry = {
  AxiosAdapter: Symbol.for("AxiosAdapter"),
};

export const container = new Container();

container.bind(HttpRegistry.AxiosAdapter).toConstantValue(http);
