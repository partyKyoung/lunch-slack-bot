import Router from "@koa/router";

const slack = new Router();

// 슬랙 event 인증
slack.post("/", (ctx: any) => {
  if (ctx.request.body.challenge) {
    ctx.body = ctx.request.body.challenge;
  }
});

slack.post("/event", (ctx: any) => {
  const body = ctx.request.body;
  const event = body.event;
});

export default slack;
