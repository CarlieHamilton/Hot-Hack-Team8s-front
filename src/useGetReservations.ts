import { db } from "../firebase.config";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  DocumentReference,
} from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";

export interface HotelReservationData {
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
  bandName: string;
  band: DocumentReference;
}

async function getReservations(
  userId: string,
): Promise<HotelReservationData[]> {
  const user = doc(db, `users/${userId}`);

  const bandQuery = query(
    collection(db, "bands"),
    where("managedBy", "==", user),
  );
  const bandSnapshot = await getDocs(bandQuery);

  const bandRefs = bandSnapshot.docs.map((document) =>
    doc(db, `bands/${document.id}`),
  );
  const bands = bandSnapshot.docs.map((document) => ({
    data: document.data(),
    id: document.id,
  }));

  // const reservationQuery = query(
  //   collection(db, "hotelReservations"),
  //   where("band", "in", bandRefs),
  // );
  const reservationSnapshot = await getDocs(
    collection(db, "hotelReservations"),
  );

  const reservations = reservationSnapshot.docs.map((document) =>
    document.data(),
  );

  const transformedReservations = reservations.map((reservation) => {
    const band = bands.find(({ id: bandId }) => bandId === reservation.band.id);
    return {
      ...reservation,
      bandName: band?.data?.name || "unknown",
      date: reservation.date.toDate(),
    };
  });

  return transformedReservations;
}

export const useGetReservations = () => {
  const userId: string = "q8NOvA887Basr18vDdZo";
  return useQuery({
    queryFn: () => getReservations(userId),
    queryKey: [userId, "getReservations"],
  });
};
