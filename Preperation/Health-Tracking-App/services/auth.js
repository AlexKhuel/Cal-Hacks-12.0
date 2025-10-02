import bcrypt from "bcrypt";
import { db } from "../src/firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";

export async function verifyLogin(username, plainPassword){
    const userDoc = await getDoc(doc(db, "users", username))

    if(!userDoc.exists()){
        return false;
    }

    const storedHash = userDoc.data().passwordHash;

    const match = await bcrypt.compare(plainPassword, storedHash)
    return match;
}