import { collection, Firestore, writeBatch, doc } from "firebase/firestore";
import { HotelData } from "./HotelData";

export const UploadDataToFirestore = async (
    validData: HotelData[],
    firestore: Firestore
) => {
    try {
        const batch = writeBatch(firestore);
        validData.forEach((item) => {
            const docRef = doc(collection(firestore, "hotels"));
            batch.set(docRef, item);
        });
        await batch.commit();
        console.log("Batch write successful");
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};