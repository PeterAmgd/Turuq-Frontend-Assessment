import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Warehouse Moderator Console",
  description: "Manage and view warehouse product details.",
};

const noFlashScript = `
(function () {
  try {
    var stored = localStorage.getItem("warehouse-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored || (prefersDark ? "dark" : "light");
    if (theme === "dark") document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className="min-h-full">
        <ThemeProvider>
          <div className="flex min-h-dvh">
            <Sidebar />
            <main className="flex-1 px-8 py-10 md:px-12">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
