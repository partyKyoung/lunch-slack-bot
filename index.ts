import Koa from "koa";
import Router from "@koa/router";
import bodyParser from "koa-bodyparser";

const app = new Koa();
const router = new Router();
const port = 3000;

app.use(bodyParser());

app.listen(port, () => {
  console.log(`Koa server is listening on port ${port}`);
});
