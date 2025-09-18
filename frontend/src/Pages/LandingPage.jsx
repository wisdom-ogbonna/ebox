import Header from "../Components/Header";
import Footer from "../Components/Footer"
import LandingContent from "../Components/LandingContent";
import Main from "../Components/Main";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <div className="flex flex-col h-[100vh] items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold mb-10 text-black mt-20">E-COMMERCE AT ITS PEAK</h1>
      <p className="text-lg text-gray-700">Your one-stop solution for all things e-commerce.</p>
      <p className="text-lg mb-5 text-gray-700">A new era of e-commerce. Discover, shop, and experience products in a smarter, faster, and more engaging way.</p>
      <button className="p-4 bg-black text-white font-bold rounded-2xl w-[90%] my-10">GET STARTED</button>
      </div>
      <LandingContent />
      <Main />
      <Footer />
    </div>
  );
}