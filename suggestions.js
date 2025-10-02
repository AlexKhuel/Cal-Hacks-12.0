import { db } from "./firebaseConfig.js";

export async function addSuggestions(userId, suggestionsData) {
    try {
        const docRef = await db.collection("users").doc(userId).collection("suggestions").add(suggestionsData);
        console.log("Suggestions entry added with ID:", docRef.id);
    } 
    catch (e) {
        console.error("Error adding suggestions entry:", e);
    }
}