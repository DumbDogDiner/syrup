import React from "react";
import { Link } from "react-router-dom";

import { ServerData } from "../../context/types";
import { ColumnHeader, ServerListTable, TableHeader } from "./styles";

export class ServerList extends React.Component<{}, { servers: ServerData[] }> {
	state = {
		servers: [{ name: "lobby", uuid: "1234", owner: "1234" }],
	};

	createRowComponents() {
		return this.state.servers.map((s) => (
			<tr key={s.uuid}>
				<td>{s.name}</td>
				<td>{s.uuid}</td>
				<td>{s.owner}</td>
				<td>
					<Link to={`/servers/${s.uuid}`}>Manage Plugins</Link>
				</td>
			</tr>
		));
	}

	render() {
		return (
			<>
				<ServerListTable>
					<TableHeader>
						<tr>
							<ColumnHeader>Name</ColumnHeader>
							<ColumnHeader>UUID</ColumnHeader>
							<ColumnHeader>Owner</ColumnHeader>
							<ColumnHeader>Actions</ColumnHeader>
						</tr>
					</TableHeader>
					<tbody>
						{this.state.servers.length > 0 ? (
							this.createRowComponents()
						) : (
							<tr>
								<td colSpan={4}>No data found</td>
							</tr>
						)}
					</tbody>
				</ServerListTable>
				<button>Refresh</button>
			</>
		);
	}
}
