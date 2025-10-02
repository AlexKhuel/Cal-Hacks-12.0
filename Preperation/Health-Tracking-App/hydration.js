import { db } from "./firebaseConfig.js";

export async function addHydration(userId, hydrationData) {
    try {
        const docRef = await db.collection("users").doc(userId).collection("hydration").add(hydrationData);
        console.log("Hydration entry added with ID:", docRef.id);
    } 
    catch (e) {
        console.error("Error adding hydration entry:", e);
    }
}