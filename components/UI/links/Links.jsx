import Link from "next/link";
import classes from "./Links.module.css";
import { FiLogIn } from "react-icons/fi";
import Langs from "../langs/Langs";
import Currency from "../currency/Currency";

export default function Links() {
	return (
		<div className={classes.Links}>
			<Link href={"/login"}>
				<FiLogIn className={classes.icon} />
			</Link>
			<Langs />
			<Currency />
		</div>
	);
}
