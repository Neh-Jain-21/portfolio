import { useState, useEffect } from "react";
// FIREBASE
import Db from "src/Helpers/Firebase";
import { runTransaction, doc } from "firebase/firestore";
// COMPONENTS
import Drawer from "src/Components/Drawer/Drawer";
import Hero from "src/Components/Hero/Hero";
import About from "src/Components/About/About";
import Project from "src/Components/Projects/Projects";
import Skills from "src/Components/Skills/Skills";
import Education from "src/Components/Education/Education";
import Contact from "src/Components/Contact/Contact";

const Homepage = () => {
	const [users, setUsers] = useState(0);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const sfDocRef = doc(Db, "users", "ksXFMoaxjsLJ5MwCqBj3");

			await runTransaction(Db, async (transaction) => {
				const sfDoc = await transaction.get(sfDocRef);

				if (!sfDoc.exists()) return;

				const newUsers = sfDoc.data().users + 1;

				setUsers(newUsers);
				transaction.update(sfDocRef, { users: newUsers });
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Drawer />
			<Hero />
			<About />
			<Project />
			<Skills />
			<Education />
			<Contact users={users} />
		</>
	);
};

export default Homepage;
