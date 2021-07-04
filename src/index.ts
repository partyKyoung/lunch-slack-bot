import Koa from "koa";
import Router from "@koa/router";
import bodyParser from "koa-bodyparser";

import api from "./api";

const app = new Koa();
const router = new Router();
const port = 3000;

app.use(bodyParser());

// // 슬랙 event test
// router.post("/slack", (ctx: any) => {
//   if (ctx.request.body.challenge) {
//     ctx.body = ctx.request.body.challenge;
//   }
// });

router.use("/api", api.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Koa server is listening on port ${port}`);
});
