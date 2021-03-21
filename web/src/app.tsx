import React from "react";
import { hot } from "react-hot-loader/root";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";

import { ServerContext } from "./context/servers";
import { routes } from "./routes";
import { GlobalStyle } from "./styles";

export const App = hot(() => (
	<ServerContext.Provider value={{ servers: [] }}>
		<GlobalStyle />
		<BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
	</ServerContext.Provider>
));
