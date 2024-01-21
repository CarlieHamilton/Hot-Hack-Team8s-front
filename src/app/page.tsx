"use client";
import { useImportParsedReservations } from "@/importParsedReservations";
import { useGetReservations } from "@/useGetReservations";
import Image from "next/image";

export default function Home() {
  const { data: reservations, isSuccess, error } = useGetReservations();
  const { mutate: importParsedReservations } = useImportParsedReservations();
  isSuccess && console.log(reservations);
  console.log(reservations, 'reservations');
  console.log(error);

  return (
    <main className="flex flex-grow h-full items-center justify-between p-24">

    </main>
  );
}
