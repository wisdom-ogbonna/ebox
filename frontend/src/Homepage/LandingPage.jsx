import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer"
import LandingContent from "../Components/LandingContent";
import Main from "../Components/Main";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div id="home">
      <Header />
      <div className="flex flex-col h-screen items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold mb-10 text-black mt-20 uppercase">The easiest way to create your online store.</h1>
      <p className="text-lg text-gray-700">Whether you&apos;re selling digital goods or physical items, we help you build a store in minutes—no coding, no stress, just growth.</p>
      <button className="p-4 bg-black text-white font-bold rounded-2xl w-[90%] my-10" onClick={() => navigate("/auth")}>GET STARTED</button>
      </div>
      <LandingContent />
      <Main />
      <Footer />
    </div>
  );
}