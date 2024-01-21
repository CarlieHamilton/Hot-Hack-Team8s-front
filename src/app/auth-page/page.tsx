import { useState } from "react";
import Link from "next/link";

export const UserLogin = () => {
  return (
    <div className="mx-auto flex h-50 w-[50%] flex-col justify-center gap-6 object-center align-middle">
      <form className="flex justify-center align-middle pt-4 flex-col gap-y-6">
        <input
          type="email"
          id="email"
          autoComplete="email"
          placeholder="EMAIL"
          className="rounded-md px-4 py-2"
        />
        <input
          type="password"
          autoComplete="current-password"
          id="password"
          placeholder="PASSWORD"
          className="rounded-md px-4 py-2"
        />
        <Link href="/forgotPassword" className="underline">
          FORGOT PASSWORD
        </Link>

        <div className="flex justify-around">
          <Link href="/dashboard">
            <button className="btn btn-outline btn-primary">
              SIGN IN
            </button>
          </Link>

          <button className="btn btn-outline btn-secondary">RESISTER</button>
        </div>
      </form>

      {/* Social SignIn Buttons */}
      <div className="flex text-center flex-col">
        <p className="uppercase pb-4">OR SIGN IN WITH</p>
        <button className="btn btn-outline btn-accent ">GOOGLE</button>
      </div>
    </div>
  );
};
