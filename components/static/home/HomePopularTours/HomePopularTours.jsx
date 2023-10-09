import Container from '@/components/wrappers/container/Container'
import classes from './HomePopularTours.module.css'
import HomePopularToursTitle from './HomePopularToursTitle/HomePopularToursTitle'
import HomePopularToursContent from './HomePopularToursContent/HomePopularToursContent'

export default function HomePopularTours() {
	return (
		<section className={classes.HomePopularTours}>
			<Container>
				<div className={classes.inner}>
					<HomePopularToursTitle/>
					<HomePopularToursContent/>
				</div>
			</Container>
		</section>
	)
}
