import Router from "@koa/router";
import { WebClient } from "@slack/web-api";
import { createEventAdapter } from "@slack/events-api";

import { SLACK_TOKEN } from "../../config/slack";

const webClient = new WebClient(SLACK_TOKEN);
const api = new Router();

api.post("/slack/event", () => {});

export default api;
