import { Divider, Grid, Paper, Typography } from "@mui/material";
// COMPONENTS
import Header from "src/Components/Header/Header";
// IMAGES
import {
	html5Img,
	css3Img,
	javascriptImg,
	jsxImg,
	reduxImg,
	sassImg,
	bootstrapImg,
	muiImg,
	antdImg,
	nodeImg,
	expressImg,
	handlebarsImg,
	ejsImg,
	mysqlImg,
	mongodbImg,
	npmImg,
	gitImg,
	githubImg,
	gitlabImg,
	apiImg,
} from "src/Assets/Images";

const headings = [
	{
		title: "FRONTEND",
		images: [
			{ image: html5Img, title: "HTML" },
			{ image: css3Img, title: "CSS" },
			{ image: javascriptImg, title: "JavaScript" },
			{ image: jsxImg, title: "React JS" },
			{ image: reduxImg, title: "Redux" },
		],
	},
	{
		title: "FRONTEND - FRAMEWORKS",
		images: [
			{ image: sassImg, title: "SASS" },
			{ image: bootstrapImg, title: "Bootstrap" },
			{ image: muiImg, title: "Material UI" },
			{ image: antdImg, title: "Ant Design" },
		],
	},
	{
		title: "BACKEND",
		images: [
			{ image: nodeImg, title: "Node JS" },
			{ image: expressImg, title: "Express JS" },
			{ image: handlebarsImg, title: "Handlebars" },
			{ image: ejsImg, title: "EJS" },
		],
	},
	{
		title: "DATABASE",
		images: [
			{ image: mysqlImg, title: "MySQL" },
			{ image: mongodbImg, title: "MongoDB" },
		],
	},
	{
		title: "OTHER",
		images: [
			{ image: npmImg, title: "NPM" },
			{ image: gitImg, title: "Git" },
			{ image: githubImg, title: "Github" },
			{ image: gitlabImg, title: "Gitlab" },
			{ image: apiImg, title: "Rest API" },
		],
	},
];

const Skills = () => (
	<Grid sx={{ my: 5 }} id="skills">
		<Header color="#9c27b0" title="SKILLS" />

		<Grid sx={{ my: 5, px: { xs: 2, md: 7 } }} container direction="column">
			{headings.map((heading) => (
				<Paper key={heading.title} sx={{ my: 2 }} elevation={5} variant="elevation">
					<Typography variant="h4" m={2} fontWeight="lighter">
						{heading.title}
					</Typography>

					<Divider variant="middle" className="divide" />

					<Grid sx={{ my: 3, px: 3 }} container direction="row">
						{heading.images.map((item) => (
							<Grid key={item.title} item xs={4} md={2} container direction="column" alignItems="center" justifyContent="flex-end">
								<img style={{ maxWidth: "80px", maxHeight: "80px", objectFit: "contain" }} loading="lazy" decoding="async" src={item.image} alt={item.title} />

								<Typography mt={2} textAlign="center" fontWeight="lighter" variant="h6">
									{item.title}
								</Typography>
							</Grid>
						))}
					</Grid>
				</Paper>
			))}
		</Grid>
	</Grid>
);

export default Skills;
