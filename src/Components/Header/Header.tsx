import { Grid, Typography } from "@mui/material";

const PageHeader = ({ color, title }: any) => (
	<Grid sx={{ p: 3, bgcolor: color, color: "white" }} container alignItems="center" justifyContent="center">
		<Typography variant="h4" fontWeight="light">
			{title}
		</Typography>
	</Grid>
);

export default PageHeader;
