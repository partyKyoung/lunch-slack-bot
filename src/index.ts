import Koa from "koa";
import Router from "@koa/router";
import bodyParser from "koa-bodyparser";

import api from "./api";

const app = new Koa();
const router = new Router();
const port = 3000;

app.use(bodyParser());

router.use("/api", api.routes());

app.listen(port, () => {
  console.log(`Koa server is listening on port ${port}`);
});
