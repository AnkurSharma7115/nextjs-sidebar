import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import "@/app/globals.css";
import ReduxProvider from "@/components/providers/ReduxProviders";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          <Sidebar />
          <main className="p-4 sm:ml-64 mt-14">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
