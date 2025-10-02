import { db } from "./firebaseConfig.js";

export async function addDiet(userId, dietData) {
    try {
        const docRef = await db.collection("users").doc(userId).collection("diet").add(dietData);
        console.log("Diet entry added with ID:", docRef.id);
    } 
    catch (e) {
        console.error("Error adding diet entry:", e);
    }
}