import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Add data to Firestore
export async function addProjectData(title, description) {
  try {
    const docRef = await addDoc(collection(db, "projects"), {
      title: title,
      description: description,
      createdAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Fetch data from Firestore
export async function getProjects() {
  const querySnapshot = await getDocs(collection(db, "projects"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
}
