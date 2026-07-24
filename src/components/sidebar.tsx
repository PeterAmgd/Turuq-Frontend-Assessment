"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

type NavItem = {
  label: string;
  href: string;
  disabled?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Dashboard", href: "#", disabled: true },
  { label: "Settings", href: "#", disabled: true },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="flex h-dvh w-56 shrink-0 flex-col justify-between border-r px-4 py-6"
      style={{ background: "var(--surface)", borderColor: "var(--line)" }}
    >
      <div>
        <div className="mb-8 px-1">
          <p
            className="text-lg font-bold leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            WAREHOUSE
          </p>
          <p className="tag-label mt-1">Moderator Console</p>
        </div>

        <nav aria-label="Main">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href !== "#" &&
                (pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href)));

              if (item.disabled) {
                return (
                  <li key={item.label}>
                    <span
                      className="flex cursor-not-allowed items-center justify-between rounded-[3px] px-3 py-2 text-sm"
                      style={{ color: "var(--ink-muted)" }}
                    >
                      {item.label}
                    </span>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center rounded-[3px] px-3 py-2 text-sm font-medium transition-colors"
                    style={{
                      background: isActive ? "var(--accent-soft)" : "transparent",
                      color: isActive ? "var(--accent-ink)" : "var(--ink)",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ThemeToggle />
    </aside>
  );
}
