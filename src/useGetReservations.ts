import { db } from "../firebase.config";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";

async function getReservations(userId: string) {
  const user = doc(db, `users/${userId}`);

  const bandQuery = query(
    collection(db, "bands"),
    where("managedBy", "==", user),
  );
  const bandSnapshot = await getDocs(bandQuery);

  const bands = bandSnapshot.docs.map((document) =>
    doc(db, `bands/${document.id}`),
  );

  const reservationQuery = query(
    collection(db, "hotelReservations"),
    where("band", "in", bands),
  );
  const reservationSnapshot = await getDocs(reservationQuery);

  const reservations: any[] = reservationSnapshot.docs.map((document) =>
    document.data(),
  );

  return reservations;
}

export const useGetReservations = () => {
  const userId: string = "q8NOvA887Basr18vDdZo";
  return useQuery({
    queryFn: () => getReservations(userId),
    queryKey: [userId, "getReservations"],
  });
};
