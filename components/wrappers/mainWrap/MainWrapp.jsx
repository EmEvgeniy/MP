"use client";
import Header from "@/components/static/header/Header";
import classes from "./MainWrap.module.css";
import Footer from "@/components/static/footer/Footer";

export default function MainWrapp({ children }) {
	return (
		<div className={classes.MainWrapp}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
