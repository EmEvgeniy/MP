import SearchComp from "@/components/UI/searchComp/SearchComp";
import classes from "./HomeSearchForm.module.css";
import DateInput from "@/components/UI/dateInput/DateInput";
import SearchBtn from "@/components/UI/searchBtn/SearchBtn";

export default function HomeSearchForm() {
	return (
		<div className={classes.SearchForm}>
			<SearchComp />
			<div className={classes.inner}>
				<DateInput />
				<SearchBtn />
			</div>
		</div>
	);
}
