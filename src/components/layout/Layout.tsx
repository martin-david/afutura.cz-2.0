import { Outlet } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollToTop from "@/components/layout/ScrollToTop";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
