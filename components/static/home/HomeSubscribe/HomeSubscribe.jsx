import Container from '@/components/wrappers/container/Container'
import classes from './HomeSubscribe.module.css'
import HomeSubscribeTitle from './HomeSubscribeTitle/HomeSubscribeTitle'
import HomeSubscribeContent from './HomeSubscribeContent/HomeSubscribeContent'

export default function HomeSubscribe() {
	return (
		<section className={classes.HomeSubscribe}>
			<Container>
				<div className={classes.inner}>
					<HomeSubscribeTitle/>
					<HomeSubscribeContent/>
				</div>
			</Container>
		</section>
	)
}
