import { FastifyPluginCallback } from "fastify";
import { Static, Type } from "@sinclair/typebox";

import { PlayerManager } from "../../../managers/PlayerManager";
import { BrowserWindow } from "electron";

const StartStreamRequest = Type.Object({
  url: Type.String(),
});
type StartStreamType = Static<typeof StartStreamRequest>;

export const post: (manager: PlayerManager) => FastifyPluginCallback =
  (manager) => (fastify, _, done) => {
    fastify.post<{
      Body: StartStreamType;
      Reply: string;
    }>(
      "/",
      {
        schema: {
          body: StartStreamRequest,
          response: {
            200: StartStreamRequest,
          },
        },
      },
      async (request, reply) => {
        const { url } = request.body;
        const windows = BrowserWindow.getAllWindows();
        for (const window of windows) {
          window.webContents.send("BROWSER_STREAM", url);
        }
        reply.status(200).send();
      }
    );

    done();
  };