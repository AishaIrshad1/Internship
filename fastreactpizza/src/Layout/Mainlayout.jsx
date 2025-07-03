import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Mainlayout() {
  return (
    <>
      <Navbar />
      <main className="h-dvh w-full max-w-3xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}