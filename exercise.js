import { db } from "./firebaseConfig.js";

export async function addExercise(userId, exerciseData) {
    try {
        const docRef = await db.collection("users").doc(userId).collection("exercise").add(exerciseData);
        console.log("Exercise entry added with ID:", docRef.id);
    } 
    catch (e) {
        console.error("Error adding exercise entry:", e);
    }
}