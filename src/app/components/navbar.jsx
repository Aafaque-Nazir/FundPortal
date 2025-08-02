"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Donate", href: "/donate" },
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-blue-600">FundRaiser</h1>
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`${
                pathname === item.href
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600"
              } hover:text-blue-500`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
