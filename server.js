import { Server } from "https://js.sabae.cc/Server.js";
import { getEvents } from "./controllers/api.js";

class MyServer extends Server {
  api(path, req) {
    switch (path) {
      case "/api/events":
        return getEvents(req);
    }
  }
}

new MyServer(8887);
