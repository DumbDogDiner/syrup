import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const links = [
	{ to: "/", value: "Servers" },
	{ to: "/plugins", value: "Plugins" },
	{ to: "/plugins/deploy", value: "Deploy Plugin" },
];

const PaddedLink = styled.span`
	padding-right: 8px;
`;

export const Navigation = () => (
	<p>
		{links.map((v, i) => (
			<PaddedLink key={i}>
				<Link to={v.to}>{v.value}</Link>
			</PaddedLink>
		))}
	</p>
);
