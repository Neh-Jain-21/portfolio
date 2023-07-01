import { Grid, Paper, Typography } from "@mui/material";
// COMPONENTS
import Header from "src/Components/Header/Header";

const details = [
	{
		link: "https://www.ldrp.ac.in/",
		title: "LDRP Institiute of Technology & Research",
		place: "Gandhinagar, Gujarat",
		sub1: "Bachelor of Engineering",
		sub2: "Information Technology",
	},
	{
		link: "https://www.allen.ac.in/",
		title: "Allen Institute",
		place: "Ahmedabad, Gujarat",
		sub1: "Gujarat Higher Secondary Education Board",
		sub2: "83 percentile in 12th",
	},
	{
		link: "https://sspsgandhinagar.org/contactus.html",
		title: "Shree Swaminarayan Public School",
		place: "Gandhinagar, Gujarat",
		sub1: "Central Board of Secondary Education",
		sub2: "9 CGPA in 10th",
	},
];

const Education = () => (
	<Grid sx={{ my: 5 }} id="education">
		<Header color="#ff9800" title="EDUCATION" />

		<Grid sx={{ mt: 1, px: { xs: 2, md: 8 } }} container spacing={4}>
			{details.map((detail) => (
				<Grid key={detail.title} item md={6} width="100%">
					<Paper sx={{ py: 2, px: { xs: 2, md: 5 } }} elevation={5} variant="elevation">
						<Typography variant="body2" fontSize="calc(1.325rem + 0.5vw)" fontWeight="lighter">
							<a href={detail.link} target="_blank" rel="noreferrer">
								{detail.title}
							</a>
						</Typography>

						<Typography variant="h6" fontWeight="lighter">
							{detail.place}
						</Typography>

						<Typography mx={3} component="ul" variant="body2" fontWeight="lighter">
							<li>{detail.sub1}</li>
							<li>{detail.sub2}</li>
						</Typography>
					</Paper>
				</Grid>
			))}
		</Grid>
	</Grid>
);

export default Education;
