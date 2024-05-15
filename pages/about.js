import React from "react";
import Link from "next/link";
import { Avatar, Chip } from "@material-ui/core";

const About = () => {
	const isClientRender = () =>
		![typeof window, typeof document].includes("undefined");
	console.log(">> ", isClientRender());
	return (
		<>
			<Link href="/">Home Page</Link>
			<h1>About Page!</h1>
			<Avatar
				alt="michele"
				src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/6f/6fe4f2c2de810cf5313335c081e86ca7a7aad8d5.jpg"
			/>
			<Chip label="ini adalah chip" />
		</>
	);
};

export default About;
