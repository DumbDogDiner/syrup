import React from "react";

import { ServerContext } from "../../context/servers";
import { ServerData } from "../../context/types";

export class ServerSelector extends React.Component<
	{ onChange: (selected: ServerData[]) => void },
	{}
> {
	render() {
		return (
			<ServerContext.Consumer>
				{(ctx) =>
					ctx.servers.length > 0 ? (
						<form>
							{ctx.servers.map((v, i) => (
								<label>
									<input key={i} id={v.uuid} type="checkbox" />
									{v.name}
								</label>
							))}
						</form>
					) : (
						<i>No servers found.</i>
					)
				}
			</ServerContext.Consumer>
		);
	}
}
