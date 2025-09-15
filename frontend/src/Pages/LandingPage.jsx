import Header from "../Components/Header";
import Copyright from "../Components/Copyright"
import LandingContent from "../Components/LandingContent";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold mb-5 text-black mt-40">E-COMMERCE AT ITS PEAK</h1>
      <p className="text-lg text-gray-700">Your one-stop solution for all things e-commerce.</p>
      <p className="text-lg text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos, et eius, perspiciatis saepe pariatur odit excepturi delectus aliquam placeat rerum in beatae, magni tenetur eos? Minima, atque pariatur consequatur rem quisquam ipsam eaque expedita. Quod quidem molestias, veritatis facilis amet molestiae doloribus placeat cupiditate odit nihil, numquam autem harum.</p>
      <button className="p-4 bg-black text-white font-bold rounded-2xl w-[90%] my-10">GET STARTED</button>
      <LandingContent />
      <Copyright />
    </div>
  );
}