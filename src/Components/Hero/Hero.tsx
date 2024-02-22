import { Typography, Grid } from "@mui/material";
// IMAGES
import { mongodbImg, expressImg, reactImg, nodeImg } from "src/Assets/Images";

const Main = () => (
	<>
		<div className="background"></div>

		<Grid container direction="column" justifyContent="center" textAlign="center" sx={{ mt: "30px", height: "100vh", p: { xs: 1.5, md: 5 } }}>
			<Typography variant="body1" my="3rem" fontSize={70}>
				We Are
			</Typography>

			<Grid container justifyContent="space-between" flexWrap="nowrap">
				<img src={mongodbImg} loading="lazy" decoding="async" alt="M" />
				<img src={expressImg} loading="lazy" decoding="async" alt="E" />
				<img src={reactImg} loading="lazy" decoding="async" alt="R" />
				<img src={nodeImg} loading="lazy" decoding="async" alt="N" />
			</Grid>

			<Typography variant="body1" my="3rem" fontSize={70}>
				Developer
			</Typography>
		</Grid>
	</>
);

export default Main;
