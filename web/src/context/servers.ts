import React from "react";

import { ServerData } from "./types";

export const ServerContext = React.createContext<{ servers: ServerData[] }>({
	servers: [],
});
