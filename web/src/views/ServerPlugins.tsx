import React from "react";
import { withRouter } from "react-router";

import { Navigation } from "../components/Navigation";

export const ServerPlugins = withRouter((props) => (
	<>
		<h1>Server information for {props.match.params["uid"]}</h1>
		<Navigation />
	</>
));
