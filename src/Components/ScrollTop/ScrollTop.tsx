import { useScrollTrigger, Zoom, Box } from "@mui/material";

const ScrollTop = (props: any) => {
	const { children } = props;

	const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });

	const handleClick = () => {
		const anchor = document.querySelector("#home");

		if (anchor) anchor.scrollIntoView({ behavior: "smooth", block: "center" });
	};

	return (
		<Zoom in={trigger}>
			<Box onClick={handleClick} role="presentation" sx={{ position: "fixed", bottom: 16, right: 16 }}>
				{children}
			</Box>
		</Zoom>
	);
};

export default ScrollTop;
