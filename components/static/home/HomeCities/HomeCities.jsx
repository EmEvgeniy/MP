
import classes from './HomeCities.module.css'
import MainCittiesTitle from './HomeCitiesTitle/HomeCitiesTitle'
import MainCitiesContent from './HomeCitiesContent/HomeCitiesContent'
import Container from '@/components/wrappers/container/Container'

export default function HomeCities() {
	return (
		<section className={classes.MainCities}>
			<Container>
				<div className={classes.inner}>
					<MainCittiesTitle/>
					<MainCitiesContent/>
				</div>
			</Container>
		</section>
	)
}
