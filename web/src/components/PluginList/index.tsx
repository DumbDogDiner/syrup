import React from "react";
import { Link } from "react-router-dom";

import { PluginData, ServerData } from "../../context/types";
import { ColumnHeader, PluginTable, TableHeader } from "./styles";

export class PluginList extends React.Component<{}, { plugins: PluginData[] }> {
	state = {
		plugins: [
			{
				name: "lobby",
				version: "0.1.0",
				hash: "1234",
				authors: ["SkyezerFox"],
			},
		],
	};

	createRowComponents() {
		return this.state.plugins.map((s, i) => (
			<tr key={i}>
				<td>{s.name}</td>
				<td>{s.version}</td>
				<td>{s.authors.join(", ")}</td>
				<td>{s.hash}</td>
				<td>
					<Link to={`/plugins/${s.hash.slice(0, 15)}`}>Manage</Link>
				</td>
			</tr>
		));
	}

	render() {
		return (
			<>
				<PluginTable>
					<TableHeader>
						<tr>
							<ColumnHeader>Name</ColumnHeader>
							<ColumnHeader>Version</ColumnHeader>
							<ColumnHeader>Authors</ColumnHeader>
							<ColumnHeader>Hash</ColumnHeader>
							<ColumnHeader>Actions</ColumnHeader>
						</tr>
					</TableHeader>
					<tbody>
						{this.state.plugins.length > 0 ? (
							this.createRowComponents()
						) : (
							<tr>
								<td colSpan={5}>No data found</td>
							</tr>
						)}
					</tbody>
				</PluginTable>
				<button>Refresh</button>
			</>
		);
	}
}
