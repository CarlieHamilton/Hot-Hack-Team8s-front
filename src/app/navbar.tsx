import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="h-20 bg-[#113f67] text-[#ffff] flex px-3 sx:px-24 lg:px-40 flex-row justify-between items-center">
        <p className="w-full my-auto text-xl font-semibold font-sans tracking-wider">
          BANDPROJECT.
        </p>

        <div className="flex flex-row justify-center items-center space-x-8">
          <p className="text-white hover:text-gray-200 hover:underline">
            <Link href="/">Home</Link>
          </p>
          <p className="text-white hover:text-gray-200 hover:underline">
            <Link href="/dashboard">Dashboard</Link>
          </p>
          <p className="text-white hover:text-gray-200 hover:underline">
            <Link href="/history-data">History</Link>
          </p>
        </div>
      </nav>
    </header>
  );
}
