"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

const menus = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: "ph:squares-four",
  },
  {
    title: "Undangan",
    href: "/admin/invitations",
    icon: "ph:envelope-open",
  },
  {
    title: "Pelanggan",
    href: "/admin/customers",
    icon: "ph:users-three",
  },
];

export default function AdminSidebar() {
  return (
    <aside className="w-72 border-r bg-white">

      <div className="p-8">

        <Link href="/">
        <h2 className="text-3xl font-serif">
          Khaira Admin
          </h2>
        <p className="text-zinc-500 mt-2">
          Home
        </p>
        </Link>

      </div>

      <nav className="px-4">

        {menus.map((menu) => (

          <Link
            key={menu.href}
            href={menu.href}
            className="
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-xl
            hover:bg-stone-100
            mb-2
            "
          >

            <Icon
              icon={menu.icon}
              width={22}
            />

            {menu.title}

          </Link>

        ))}

      </nav>

    </aside>
  );
}