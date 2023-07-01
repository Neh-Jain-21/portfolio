import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

initializeApp({
	apiKey: "AIzaSyAHaBMQnhf0ihoz2p-d4pZX3SQQtlZ3bYk",
	authDomain: "portfolio-3cd09.firebaseapp.com",
	projectId: "portfolio-3cd09",
	storageBucket: "portfolio-3cd09.appspot.com",
	messagingSenderId: "961260362419",
	appId: "1:961260362419:web:f7e44fe9210246029beec6",
	measurementId: "G-ZV3VPVQYNR",
});

const Db = getFirestore();

export default Db;
