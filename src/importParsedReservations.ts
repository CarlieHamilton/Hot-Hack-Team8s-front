import {
  Timestamp,
  addDoc,
  collection,
  doc,
  writeBatch,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface HotelReservationInput {
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
}

type ImportParsedReservationsProps = {
  reservations: HotelReservationInput[];
  bandName: string;
};

export async function importParsedReservations({
  bandName,
  reservations,
}: ImportParsedReservationsProps) {
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

export function useImportParsedReservations() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: importParsedReservations,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getReservation", "q8NOvA887Basr18vDdZo"],
      });
    },
  });
}
