import classes from "./FooterPayment.module.css";
import master from "@/public/master.webp";
import visa from "@/public/visa.webp";
import paypal from "@/public/paypal.webp";
import Image from "next/image";

const obj = [master, visa, paypal];

export default function FooterPayment() {
	return (
		<div className={classes.FooterPayment}>
			{obj.map((el, index) => (
				<Image src={el} key={index} width={100} height={50} alt='payment' />
			))}
		</div>
	);
}
