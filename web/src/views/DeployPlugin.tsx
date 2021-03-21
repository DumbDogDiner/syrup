import React from "react";

import { Navigation } from "../components/Navigation";
import { PluginUploader } from "../components/PluginUploader";
import { ServerSelector } from "../components/ServerSelector";

export const DeployPlugin: React.FC = () => (
	<>
		<h1>Deploy Plugin</h1>
		<Navigation />
		<p>
			Upload a valid plugin jar to the server, and deploy it on the selected
			containers.
		</p>
		<PluginUploader />
	</>
);
