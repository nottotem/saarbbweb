import Navbar from "../components/navbar";
import MethodsContact from "../components/methodscontact";

import Footer from "../components/footer";

function Contacto() {
  return (
    <div className="w-full h-screen">
      <section className="relative flex flex-col justify-center items-center w-full h-1/4 md:h-1/3 lg:h-1/2 bg-gradient-to-b from-[#004483] via-[#015cb1] to-[#0272db]">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex items-center justify-center w-full h-1/5">
            <Navbar />
          </div>
          <div className="flex flex-col items-center justify-center w-full h-4/5">
            <h1 className="font-mono text-transparent text-3xl md:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-b from-slate-50 to-slate-300 font-bold">
              Contactá a la sociedad
            </h1>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center w-full py-10 md:py-2 lg:py-2 h-auto md:h-1/2 lg:h-1/2 bg-slate-200">
        <MethodsContact />
      </section>
      <section className="w-full h-auto">
        <Footer />
      </section>
    </div>
  );
}

export default Contacto;
