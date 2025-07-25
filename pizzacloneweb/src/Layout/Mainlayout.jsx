import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


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