import React from "react";
import Footer from "../components/sections/footer";
import Header from "../components/sections/header";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Photos from "../components/sections/photos";
import Videos from "../components/sections/videos";
import Code from "../components/sections/code";
import Facts from "../components/sections/facts";
import { Helmet } from "react-helmet";

export default function Index() {
	return (
		<>
			<Helmet>
				<html lang="en" />
				<meta charSet="utf-8" />
				<title>Marco Forster</title>
			</Helmet>
			<Header />
			<Hero />
			<Facts />
			<About />
			<Photos />
			<Videos />
			<Code />
			<Footer />
		</>
	);
}
