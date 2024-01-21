"use client";
import { useImportParsedReservations } from "@/importParsedReservations";
import { useGetReservations } from "@/useGetReservations";
import { UserLogin } from "./auth-page/page";
import FooterLogin from "./Footer-login";

export default function Home() {
  const { data: reservations, isSuccess, error } = useGetReservations();
  const { mutate: importParsedReservations } = useImportParsedReservations();
  isSuccess && console.log(reservations);
  console.log(reservations, "reservations");
  console.log(error);

  return (
    <main className="flex flex-col h-[80%] items-center py-5 px-24">
      <h1 className="text-4xl py-10 px-6">Login</h1>
      <UserLogin />
    </main>
  );
}
