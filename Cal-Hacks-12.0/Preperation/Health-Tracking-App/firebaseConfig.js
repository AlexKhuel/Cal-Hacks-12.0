import { createRequire } from "module";
import { initializeApp, getApps, getApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import admin from "firebase-admin";

const require = createRequire(import.meta.url);
const serviceAccount = require("./health-tracking-app-jd-ns-firebase-adminsdk-fbsvc-049c590b99.json");

const app = !getApps().length
  ? initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : getApp();

const db = getFirestore(app);

export { db };