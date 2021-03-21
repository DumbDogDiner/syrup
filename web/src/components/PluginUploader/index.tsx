import React from "react";

import { ServerSelector } from "../ServerSelector";

export class PluginUploader extends React.Component<{}, {}> {
	render() {
		return (
			<>
				<input type="file" multiple={false} />
				<ServerSelector onChange={() => {}} />
			</>
		);
	}
}
