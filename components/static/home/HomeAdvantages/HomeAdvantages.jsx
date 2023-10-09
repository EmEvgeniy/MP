import Container from '@/components/wrappers/container/Container'
import classes from './HomeAdvantages.module.css'
import HomeAdvantagesTitle from './HomeAdvantagesTitle/HomeAdvantagesTitle'
import HomeAdvantagesContent from './HomeAdvantagesContent/HomeAdvantagesContent'

export default function HomeAdvantages() {
	return (
		<section className={classes.HomeAdvantages}>
			<Container>
				<div className={classes.inner}>
					<HomeAdvantagesTitle/>
					<HomeAdvantagesContent/>
				</div>
			</Container>
		</section>
	)
}
