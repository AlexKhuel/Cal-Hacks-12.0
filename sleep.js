import { db } from "./firebaseConfig.js";

export async function addSleep(userId, sleepData) {
    try {
        const docRef = await db.collection("users").doc(userId).collection("sleep").add(sleepData);
        console.log("Sleep entry added with ID:", docRef.id);
    } 
    catch (e) {
        console.error("Error adding sleep entry:", e);
    }
}