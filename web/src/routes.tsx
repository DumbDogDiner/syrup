import React from "react";
import { RouteConfig } from "react-router-config";

import { DeployPlugin } from "./views/DeployPlugin";
import { Plugins } from "./views/Plugins";
import { ServerPlugins } from "./views/ServerPlugins";
import { Servers } from "./views/Servers";

export const routes: RouteConfig[] = [
	{ path: "/", exact: true, component: Servers },
	{ path: "/servers/:uid", component: ServerPlugins },
	{ path: "/plugins", exact: true, component: Plugins },
	{ path: "/plugins/deploy", exact: true, component: DeployPlugin },
];
