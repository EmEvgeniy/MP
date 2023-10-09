import Container from '@/components/wrappers/container/Container'
import classes from './Footer.module.css'
import FooterPayment from './FooterPayment/FooterPayment'
import FooterContent from './FooterContent/FooterContent'

export default function Footer() {
	return (
		<footer className={classes.Footer}>
			<Container>
				<div className={classes.inner}>
					<FooterPayment/>
					<FooterContent/>
				</div>
			</Container>
		</footer>
	)
}
