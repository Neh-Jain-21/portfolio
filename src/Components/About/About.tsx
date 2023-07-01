import { Grid, Avatar, Typography } from "@mui/material";
// IMAGES
import { profileImg } from "src/Assets/Images";

const Main = () => (
	<Grid sx={{ my: 5 }} id="about">
		<Grid sx={{ p: 3, bgcolor: "#008073", color: "white" }} container direction="column" alignItems="center" justifyContent="center">
			<Avatar sx={{ width: 240, height: 240, border: "5px solid white", mt: "-100px" }} alt="Neh Jain" src={profileImg} />

			<Typography mt={3} variant="h4" fontWeight="light">
				ABOUT
			</Typography>
		</Grid>

		<Grid sx={{ mt: 5, borderLeft: "10px solid #795548", mx: { xs: 0, md: 14 } }}>
			<Typography sx={{ color: "#795548", ml: 2 }} variant="h4">
				Hi. I’m Neh, nice to meet you. Please take a look around!
			</Typography>
		</Grid>

		<Grid sx={{ mt: 5, mx: { xs: 2, md: 14 } }}>
			<Typography variant="h5" fontWeight="light">
				Neh Jain this side, currently pursuing Bachelors of Engineering (2018-2022) in Information Technology from LDRP ITR (Gandhinagar). I am Full stack developer with a passion for
				thoughtful UI design and collaboration.
				<br />
				<br />
				As a web developer, I enjoy turning complex problems into simple, beautiful and intuitive designs. All of my websites are responsive and will work on any device big to small. That's
				why I’m excited to make a big impact at a high growth company.
				<br />
				<br />
				Below you can see some projects I've been working on lately.
			</Typography>
		</Grid>
	</Grid>
);

export default Main;
