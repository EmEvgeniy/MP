import classes from "./FooterSocialLinks.module.css";
import { SlSocialVkontakte } from "react-icons/sl";
import { AiFillFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

const obj = [
	{ icon: <SlSocialVkontakte className={classes.icon} />, link: "" },
	{ icon: <AiFillFacebook className={classes.icon} />, link: "" },
	{ icon: <FiTwitter className={classes.icon} />, link: "" },
	{ icon: <BsInstagram className={classes.icon} />, link: "" },
];

export default function FooterSocialLinks() {
	return (
		<div className={classes.SocialLinks}>
			{obj.map((el, index) => (
				<a href={el.link} key={index}>
					{el.icon}
				</a>
			))}
		</div>
	);
}
