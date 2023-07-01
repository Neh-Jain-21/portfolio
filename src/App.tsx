import { Suspense, lazy } from "react";
// COMPONENTS
import FallBack from "src/Components/FallBack/FallBack";
// PAGES
const Homepage = lazy(() => import("src/Pages/Homepage/Homepage"));

const App = () => {
	// const baseName = import.meta.env.DEV ? "/" : "/portfolio/";

	return (
		<Suspense fallback={<FallBack />}>
			<Homepage />
		</Suspense>
	);
};

export default App;
