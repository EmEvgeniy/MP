"use client";
import { useEffect, useState } from "react";
import classes from "./TripsFilter.module.css";
import { useStore } from "@/store/store";
import { AiOutlineFilter } from "react-icons/ai";
import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Rating,
	Slider,
	Switch,
} from "@mui/material";
import { BsClock, BsCurrencyDollar, BsGraphUpArrow } from "react-icons/bs";
import { FaBusAlt } from "react-icons/fa";
import { BiDna, BiFootball } from "react-icons/bi";
import { MdChildCare } from "react-icons/md";
import { AiOutlineStar, AiOutlineHome, AiOutlineTag } from "react-icons/ai";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
	palette: {
		primary: {
			light: "#EBB855",
			main: "#EBB855",
			dark: "#EBB855",
			contrastText: "#EBB855",
		},
		secondary: {
			light: "#EBB855",
			main: "#EBB855",
			dark: "#EBB855",
			contrastText: "#EBB855",
		},
	},
});

const marks = [
	{
		value: 1,
		label: "1",
	},
	{
		value: 20,
		label: "20",
	},
];
const marks2 = [
	{
		value: 31,
		label: "31",
	},
	{
		value: 18550,
		label: "18,550",
	},
];

const ruBtn = "Фильтр";
const enBtn = "Filter";

export default function TripsFilter() {
	const [btn, setBtn] = useState("");
	const [active2, setActive2] = useState(false);
	const [value, setValue] = useState([1, 20]);
	const [value2, setValue2] = useState([31, 18550]);
	const [value3, setValue3] = useState(2);
	const [active, setActive] = useState("For person");

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const handleChange2 = (newValue) => {
		setValue2(newValue);
	};

	const lang = useStore((state) => state.lang);
	useEffect(() => {
		lang === "RU" ? setBtn(ruBtn) : setBtn(enBtn);
	}, [lang]);

	return (
		<div className={classes.TripsFilter}>
			<div className={classes.btn} onClick={() => setActive2(!active2)}>
				<AiOutlineFilter className={classes.icon} />
				<span>{btn}</span>
			</div>
			<form
				className={
					active2 ? `${classes.form} ${classes.active}` : `${classes.form}`
				}>
				<ThemeProvider theme={theme}>
					<div className={classes.duration}>
						<p>
							<BsClock />
							<span>Duration</span>
						</p>
						<Slider
							value={value}
							onChange={handleChange}
							valueLabelDisplay='auto'
							marks={marks}
							defaultValue={[1, 20]}
							min={1}
							max={20}
						/>
						<RadioGroup>
							<FormControlLabel
								value='One daily tours'
								control={<Radio />}
								label='One daily tours'
							/>
							<FormControlLabel
								value='Multi-day tours'
								control={<Radio />}
								label='Option 2'
							/>
						</RadioGroup>
					</div>
					<div className={classes.type}>
						<p>
							<FaBusAlt />
							<span>Type of tour:</span>
						</p>
						<RadioGroup>
							<FormControlLabel
								value='Group tour'
								control={<Radio />}
								label='Group tour'
							/>
							<FormControlLabel
								value='Individual tour'
								control={<Radio />}
								label='Individual tour'
							/>
							<FormControlLabel
								value='Short tips'
								control={<Radio />}
								label='Short tips'
							/>
						</RadioGroup>
					</div>
					<div className={classes.price}>
						<p>
							<BsCurrencyDollar />
							<span>Price</span>
						</p>
						<div className={classes.btns}>
							<p
								onClick={() => setActive("For person")}
								className={
									active === "For person"
										? `${classes.btn1} ${classes.active}`
										: `${classes.btn1}`
								}>
								For person
							</p>
							<p
								onClick={() => setActive("For day")}
								className={
									active === "For day"
										? `${classes.btn2} ${classes.active}`
										: `${classes.btn2}`
								}>
								For day
							</p>
						</div>
						<Slider
							value={value2}
							onChange={handleChange2}
							valueLabelDisplay='auto'
							marks={marks2}
							defaultValue={[31, 18550]}
							min={31}
							max={18550}
						/>
					</div>
					<div className={classes.rating}>
						<p>
							<AiOutlineStar />
							<span>Tour organizer rating</span>
						</p>
						<Rating
							name='simple-controlled'
							value={value3}
							onChange={(event, newValue) => {
								setValue3(newValue);
							}}
						/>
					</div>
					<div className={classes.type}>
						<p>
							<AiOutlineHome />
							<span>Accommodation</span>
						</p>
						<RadioGroup>
							<FormControlLabel
								value='Tents or campsites'
								control={<Radio />}
								label='Tents or campsites'
							/>
							<FormControlLabel
								value='1* hotels or guest houses'
								control={<Radio />}
								label='1* hotels or guest houses'
							/>
							<FormControlLabel
								value='2* hotels or apartments'
								control={<Radio />}
								label='2* hotels or apartments'
							/>
						</RadioGroup>
					</div>
					<div className={classes.type}>
						<p>
							<BiDna />
							<span>Age of group</span>
						</p>
						<RadioGroup>
							<FormControlLabel
								value='18-29'
								control={<Radio />}
								label='18-29'
							/>
							<FormControlLabel value='30+' control={<Radio />} label='30+' />
							<FormControlLabel
								value='40+'
								control={<Radio />}
								label='2* hotels or apartments'
							/>
							<FormControlLabel value='50+' control={<Radio />} label='50+' />
							<FormControlLabel value='60+' control={<Radio />} label='60+' />
						</RadioGroup>
					</div>
					<div className={classes.type}>
						<p>
							<MdChildCare />
							<span>Possible with children</span>
						</p>
						<RadioGroup>
							<FormControlLabel value='All' control={<Radio />} label='All' />
							<FormControlLabel
								value='Under one year old'
								control={<Radio />}
								label='Under one year old'
							/>
							<FormControlLabel
								value='1 year'
								control={<Radio />}
								label='1 year'
							/>
							<FormControlLabel
								value='2 years'
								control={<Radio />}
								label='2 years'
							/>
							<FormControlLabel
								value='3 years'
								control={<Radio />}
								label='3 years'
							/>
							<FormControlLabel
								value='4 years'
								control={<Radio />}
								label='4 years'
							/>
							<FormControlLabel
								value='5 years'
								control={<Radio />}
								label='5 years'
							/>
						</RadioGroup>
					</div>
					<div className={classes.type}>
						<p>
							<BsGraphUpArrow />
							<span>Activity level</span>
						</p>
						<RadioGroup>
							<FormControlLabel value='All' control={<Radio />} label='All' />
							<FormControlLabel
								value='Relaxing'
								control={<Radio />}
								label='Relaxing'
							/>
							<FormControlLabel value='Calm' control={<Radio />} label='Calm' />
							<FormControlLabel
								value='Immersive'
								control={<Radio />}
								label='Immersive'
							/>
							<FormControlLabel
								value='Intensive'
								control={<Radio />}
								label='Intensive'
							/>
							<FormControlLabel
								value='Extreme'
								control={<Radio />}
								label='Extreme'
							/>
						</RadioGroup>
					</div>
					<div className={classes.lang}>
						<p>
							<BiFootball />
							<span>Tour language</span>
						</p>
						<RadioGroup>
							<FormControlLabel
								value='Russian'
								control={<Radio />}
								label='Russian'
							/>
							<FormControlLabel
								value='English'
								control={<Radio />}
								label='English'
							/>
						</RadioGroup>
						<button>all languages</button>
					</div>
					<div className={classes.disc}>
						<p>
							<AiOutlineTag />
							<span>Only with discount</span>
						</p>
						<Switch />
					</div>
					<div className={classes.reset_wrap}>
						<button className={classes.reset}>reset</button>
					</div>
				</ThemeProvider>
			</form>
		</div>
	);
}
