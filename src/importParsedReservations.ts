import {
  DocumentReference,
  Timestamp,
  addDoc,
  collection,
  doc,
  writeBatch,
} from "firebase/firestore";
import { db } from "../firebase.config";

type HotelData = {
  date: Date;
  city: string;
  state: string;
  king: number;
  twin: number;
  suite: number;
  roomNightTotal: number;
  spend: number;
  roomMarketAverage: number;
  savings: number;
};

export async function importParsedReservations(
  reservations: HotelData[],
  bandName: string,
) {
  const band = await addDoc(collection(db, "bands"), {
    name: bandName,
    managedBy: doc(db, "users/q8NOvA887Basr18vDdZo"),
  });
  const batch = writeBatch(db);

  reservations.forEach(({ date, ...rest }) => {
    batch.set(doc(collection(db, "hotelReservations")), {
      date: Timestamp.fromDate(date),
      band: doc(db, `users/${band.id}`),
      ...rest,
    });
  });

  await batch.commit();
}
