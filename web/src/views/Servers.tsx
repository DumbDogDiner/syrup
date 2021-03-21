import React from "react";
import { Link } from "react-router-dom";

import { Navigation } from "../components/Navigation";
import { ServerList } from "../components/ServerList";

export const Servers: React.FC = () => (
	<>
		<h1>Server List</h1>
		<Navigation />
		<ServerList />
	</>
);
