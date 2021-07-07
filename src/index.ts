import express from "express";
import { createEventAdapter } from "@slack/events-api";
import { WebClient } from "@slack/web-api";

import { SLACK_TOKEN, SLACK_SIGNING_SECRET } from "../config/slack";

const app = express();
const slackEvents = createEventAdapter(SLACK_SIGNING_SECRET);
const webClient = new WebClient(SLACK_TOKEN);
const PORT = 3000;

// slackEvents.on("message", async (event) => {
//   console.log(event);

//   if (event.text === "test") {
//     webClient.chat.postMessage({
//       text: "안녕하세요!",
//       channel: event.channel,
//     });
//   }
// });

app.post("/slack/lunch", (req, res) => {
  console.log(req);
  res.send({
    response_type: "ephemeral",
    text: "test",
  });
});

// app.use("/slack/events", slackEvents.requestListener());

app.listen(PORT, () => {
  console.log("Express app listeing port 3000");
});
