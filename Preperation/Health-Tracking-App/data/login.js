import bcrypt from "bcrypt";
import { db } from "../src/firebaseConfig.js";
import { doc, setDoc } from "firebase/firestore";

export async function addLogin(userId, username, plainPassword) {
    try {
        const passwordHash = await bcrypt.hash(plainPassword, 10);

        await setDoc(doc(db, "users", userId), {
            username,
            passwordHash
        });

        console.log("Login added for user:", userId);
    } 
    catch (e) {
            console.error("Error adding login entry:", e);
    }
}