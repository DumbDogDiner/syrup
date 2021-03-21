import React from "react";
import { Link } from "react-router-dom";

import { Navigation } from "../components/Navigation";
import { PluginList } from "../components/PluginList";

export const Plugins: React.FC = () => (
	<>
		<h1>Plugin List</h1>
		<Navigation />
		<PluginList />
	</>
);
