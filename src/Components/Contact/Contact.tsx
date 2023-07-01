import { Grid, Typography, Button, IconButton } from "@mui/material";
import { Mail, LinkedIn, GitHub } from "@mui/icons-material";
// COMPONENTS
import Header from "src/Components/Header/Header";

const Contact = (props: any) => (
	<>
		<Grid id="contact">
			<Header color="#d24d57" title="CONTACT" />

			<Grid container flexDirection="column" alignItems="center">
				<Grid sx={{ my: 5 }} container flexDirection="column" textAlign="center">
					<Typography variant="h4" color="#D24D57">
						LET'S CREATE SOMETHING GREAT
					</Typography>

					<Typography variant="h6" fontWeight="normal">
						If you like my work and want me to hire, just send me direct message or contact me through social sites listed below.
					</Typography>
				</Grid>

				<a href="mailto:nehjain.2001@gmail.com" target="_blank" rel="noreferrer">
					<Button size="large" color="error" variant="outlined" startIcon={<Mail />}>
						GET IN TOUCH
					</Button>
				</a>

				<Grid sx={{ mt: 0, mb: 3 }} container width="auto" spacing={8}>
					<Grid item xs={4}>
						<a href="https://github.com/Neh-Jain-21" target="_blank" rel="noreferrer">
							<IconButton sx={{ bgcolor: "#d24d57", color: "white", width: 60, height: 60, "&:hover": { bgcolor: "#d24d57" } }}>
								<GitHub fontSize="large" />
							</IconButton>
						</a>
					</Grid>

					<Grid item xs={4}>
						<a href="https://linkedin.com/in/nehjain2001" target="_blank" rel="noreferrer">
							<IconButton sx={{ bgcolor: "#d24d57", color: "white", width: 60, height: 60, "&:hover": { bgcolor: "#d24d57" } }}>
								<LinkedIn fontSize="large" />
							</IconButton>
						</a>
					</Grid>

					<Grid item xs={4}>
						<a href="https://www.hackerrank.com/nehjain_2001" target="_blank" rel="noreferrer">
							<IconButton sx={{ bgcolor: "#d24d57", color: "white", width: 60, height: 60, "&:hover": { bgcolor: "#d24d57" } }}>HR</IconButton>
						</a>
					</Grid>
				</Grid>

				<Grid container width="auto" spacing={8}>
					<Grid item xs={6}>
						<a href="https://www.facebook.com/nehjain.21/" target="_blank" rel="noreferrer">
							<IconButton sx={{ bgcolor: "#d24d57", color: "white", width: 60, height: 60, "&:hover": { bgcolor: "#d24d57" } }}>FB</IconButton>
						</a>
					</Grid>

					<Grid item xs={6}>
						<a href="https://www.instagram.com/neh_jain_21/" target="_blank" rel="noreferrer">
							<IconButton sx={{ bgcolor: "#d24d57", color: "white", width: 60, height: 60, "&:hover": { bgcolor: "#d24d57" } }}>IG</IconButton>
						</a>
					</Grid>
				</Grid>
			</Grid>
		</Grid>

		<Grid container direction="column" sx={{ bgcolor: "#252525", color: "white", mt: 5, p: { xs: 2, md: 4 } }} justifyContent="center" alignItems="center">
			<Typography component="p" textAlign="center">
				This site is built using great tools like
				<a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer">
					VsCode
				</a>
				,
				<a href="https://reactjs.org/" target="_blank" rel="noreferrer">
					React JS
				</a>
				,
				<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
					Node JS
				</a>{" "}
				&
				<a href="https://mui.com/" target="_blank" rel="noreferrer">
					MUI.
				</a>
			</Typography>

			<Typography variant="caption" component="div" textAlign="center">
				{props.users} Website Visits Till Now.
			</Typography>
		</Grid>
	</>
);

export default Contact;
