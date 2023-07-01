import { useState } from "react";
import { Link } from "react-scroll";
import { AppBar, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Drawer as MuiDrawer, Fab } from "@mui/material";
import { Menu, Person, TableChart, BarChart, ImportContacts, Contacts, KeyboardArrowUp, PostAdd } from "@mui/icons-material";
// COMPONENTS
import ScrollTop from "src/Components/ScrollTop/ScrollTop";
import HideOnScroll from "src/Components/HideOnScroll/HideOnScroll";
// RESUME
import resume from "src/Assets/Files/resume.pdf";

const Lists = [
	{ title: "about", icon: Person, color: "#008073" },
	{ title: "projects", icon: TableChart, color: "#3F51B5" },
	{ title: "skills", icon: BarChart, color: "#9C27B0" },
	{ title: "education", icon: ImportContacts, color: "#FF9800" },
	{ title: "contact", icon: Contacts, color: "#795548" },
];

const Drawer = (props: any) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

	const drawer = (
		<div>
			<div>
				<List>
					<ListItem>
						<h2>Portfolio</h2>
					</ListItem>
				</List>
			</div>

			<List>
				{Lists.map((list) => (
					<Link key={list.title} onClick={handleDrawerToggle} to={list.title} spy={true} smooth={false}>
						<ListItem sx={{ px: "16px !important", py: "8px !important" }} button>
							<ListItemIcon>
								<list.icon sx={{ color: list.color }} />
							</ListItemIcon>
							<ListItemText sx={{ textTransform: "capitalize" }} primary={list.title} />
						</ListItem>
					</Link>
				))}

				<a href={resume} download="Neh Jain CV">
					<ListItem sx={{ px: "16px !important", py: "8px !important" }} button>
						<ListItemIcon>
							<PostAdd style={{ color: "#424242" }} />
						</ListItemIcon>
						<ListItemText primary="Resume" />
					</ListItem>
				</a>
			</List>
		</div>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div id="home">
			<HideOnScroll {...props}>
				<AppBar sx={{ py: 1 }} color="inherit">
					<Grid container direction="row" flexWrap="nowrap" alignItems="center" sx={{ px: 2 }}>
						<IconButton size="large" onClick={handleDrawerToggle}>
							<Menu />
						</IconButton>

						<Grid sx={{ mr: "48px" }} container direction="column" textAlign="center">
							<span style={{ fontSize: "28px", color: "#008073" }}>
								Neh Jain <br />
							</span>
							<span style={{ color: "#B19D95" }}>Full Stack Developer</span>
						</Grid>
					</Grid>
				</AppBar>
			</HideOnScroll>

			<MuiDrawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{ ".MuiDrawer-paper": { width: 190 } }} ModalProps={{ keepMounted: true }}>
				{drawer}
			</MuiDrawer>

			<ScrollTop {...props}>
				<Fab onClick={() => (document.documentElement.scrollTop = 0)} color="primary" size="medium">
					<KeyboardArrowUp />
				</Fab>
			</ScrollTop>
		</div>
	);
};

export default Drawer;
