import { useState } from "react";
// import { useRouter } from "next/router";
// import { useCallback } from "react";
import Link from "next/link";

export const UserLogin = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const router = useRouter();

    // const handleRoute = useCallback(() => {
    //     router.push("/dashboard");
    // }, [router]);

    return (
        <div className="relative mx-auto flex h-full max-w-[600px] flex-col justify-center gap-6 object-center pt-12 align-middle">
            <h1 className="relative text-center text-3xl font-bold uppercase text-orange-600">
                Login{" "}
                <span className="after:absolute after:bottom-0 after:left-1/2 after:h-[5px] after:w-[100px] after:-translate-x-12 after:translate-y-3 after:bg-orange-600" />
            </h1>
            <form className="flex justify">
                <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="EMAIL"
                    // onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    autoComplete="current-password"
                    id="password"
                    placeholder="PASSWORD"
                    // onChange={(event) => setPassword(event.target.value)}
                />
                <Link href="/forgotPassword" className="underline">
                    FORGOT PASSWORD
                </Link>
                <Link href="/dashboard">
                    <button className="btn btn-outline btn-primary">
                        SIGN IN
                    </button>
                </Link>

                <button className="btn btn-outline btn-secondary">
                    RESISTER
                </button>
            </form>

            {/* Social SignIn Buttons */}
            <div className="flex text-center">
                <p className="uppercase">OR SIGN IN WITH</p>
                <button
                    className="btn btn-outline btn-accent "
                    // onClick={handleRoute}
                >
                    GOOGLE
                </button>
            </div>
        </div>
    );
};
