import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
// COMPONENTS
import Header from "src/Components/Header/Header";
// IMAGES
import { grihsthitiImg, uielementsImg, omsImg, tictacttoeImg, todoappImg, reimagineImg, chatImg, expensetrackerImg, discordbotImg, mediahostImg } from "src/Assets/Images";

const projects = [
	{
		image: grihsthitiImg,
		title: "Grihsthiti",
		decription: "Grihsthiti is a shopping website that connects local shops with customers in the surrounding areas",
		link: "https://grihsthiti-website.vercel.app/",
		available: true,
	},
	{
		image: uielementsImg,
		title: "Ui Elements",
		decription: "We provide a vast collection of open-source UI elements to enhance your web design projects",
		link: "https://uielements.vercel.app/",
		available: true,
	},
	{
		image: omsImg,
		title: "Online Mentoring System",
		decription: "The online mentoring system provides the communication platform between faculties and students",
		link: "",
		available: false,
	},
	{
		image: mediahostImg,
		title: "MediaHost",
		decription: "MediaHost platform provides developers to easily host and consume their media contents anytime, anywhere",
		link: "",
		available: false,
	},
	{
		image: reimagineImg,
		title: "ReImagine",
		decription: "React App fully backed with redux. User can register, login and share images and videos. Other Profiles can like and see the post. All data will be lost on refresh!!",
		link: "https://reimagine-code.vercel.app/",
		available: true,
	},
	{
		image: chatImg,
		title: "Chat App",
		decription: "It is Web Application for group chatting including email authentication and login functionality",
		link: "https://neh-jain-21.github.io/Messenger-Clone",
		available: true,
	},
	{
		image: discordbotImg,
		title: "Cyan Discord Bot Website",
		decription: "Web Application showing features and functions of our discord bot. Integrate it directly on discord",
		link: "https://neh-jain-21.github.io/cyanbot",
		available: true,
	},
	{
		image: tictacttoeImg,
		title: "Tic Tac Toe",
		decription: "You know what it is!",
		link: "https://neh-jain-21.github.io/tic-tac-toe/",
		available: true,
	},
	{
		image: todoappImg,
		title: "Todo App",
		decription: "Todo App created using react-redux and lazy loading with add, edit, delete, and search todo with Dark Mode",
		link: "https://neh-jain-21.github.io/todo-app/",
		available: true,
	},
	{
		image: expensetrackerImg,
		title: "Expense Tracker",
		decription: "Expense Tracker using react and redux",
		link: "https://neh-jain-21.github.io/expense-tracker/",
		available: true,
	},
];

const Main = () => (
	<Grid sx={{ mb: 5 }} id="projects">
		<Header color="#3f51b5" title="PROJECTS" />

		<Grid container direction="row">
			{projects.map((project) => (
				<Grid key={project.title} item sm={6} md={4}>
					<Card sx={{ m: 4, mb: 0 }}>
						<CardMedia component="img" height="100%" width="100%" image={project.image} title={project.title} />

						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{project.title}
							</Typography>

							<Typography variant="body2" color="textSecondary" component="p">
								{project.decription}
							</Typography>
						</CardContent>

						<CardActions>
							{project.available ? (
								<a href={project.link} target="_blank" rel="noreferrer">
									<Button size="small" color="primary">
										Open
									</Button>
								</a>
							) : (
								<Button size="small" color="primary">
									Deploying Soon
								</Button>
							)}
						</CardActions>
					</Card>
				</Grid>
			))}
		</Grid>
	</Grid>
);

export default Main;
