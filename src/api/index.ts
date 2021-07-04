import Router from "@koa/router";
import { WebClient } from "@slack/web-api";

import slack from "./slack";

import { SLACK_TOKEN } from "../../config/slack";

const webClient = new WebClient(SLACK_TOKEN);
const api = new Router();

api.use("/slack", slack.routes());

export default api;
