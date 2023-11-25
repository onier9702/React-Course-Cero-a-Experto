
import { collection, getDocs, orderBy, query } from "firebase/firestore"; 
import { db } from "../firebase/firebase-config"



export const loadNotes = async(uid) => {

    const ref = collection(db, uid);
    const q = query(ref, orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    const notes = [];
    querySnapshot.forEach((doc) => {

        notes.push({
            id: doc.id,
            ...doc.data(),
        })
        // console.log(doc.data());
        // console.log(notes);
    });
    // console.log("Helpers should returns notes array");
    // console.log(notes);
    return notes;
}