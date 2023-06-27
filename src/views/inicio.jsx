import Navbar from "../components/navbar";
import History from "../components/history";
import fondo from "../media/fondo.jpg";
import Footer from "../components/footer";

// function Inicio() {
//   return (
//     <div className="w-full h-screen bg-slate-200">
//       <section className="relative flex flex-col justify-center items-center w-full h-1/2 bg-black">
//         <img
//           src={fondo}
//           alt="background"
//           className="absolute object-cover w-full h-full z-0 opacity-40"
//         />
//         <div className="flex flex-col items-center justify-center w-full h-full z-10">
//           <div className="flex items-center justify-center w-full h-1/5">
//             <Navbar />
//           </div>
//           <div className="flex flex-col items-center justify-center w-full h-4/5">
//             <h1 className="font-mono text-transparent text-6xl bg-clip-text bg-gradient-to-b from-slate-50 to-slate-300 font-bold">
//               Sociedad de Anestesia
//             </h1>
//             {/* <h3 className="font-mono text-transparent text-4xl bg-clip-text bg-gradient-to-b from-slate-50 to-slate-300 font-bold">
//               Bahía Blanca
//             </h3> */}
//           </div>
//         </div>
//       </section>
//       <section className="w-full h-auto bg-slate-200">
//         <History />
//       </section>
//       <section className="w-full h-auto">
//         <Footer />
//       </section>
//     </div>
//   );
// }

function Inicio() {
  return (
    <div className="w-full h-screen bg-slate-200">
      <section className="relative flex flex-col justify-center items-center w-full h-1/4 md:h-1/3 lg:h-1/2 bg-black">
        <img
          src={fondo}
          alt="background"
          className="absolute object-cover w-full h-full z-0 opacity-40"
        />
        <div className="flex flex-col items-center justify-center w-full h-full z-10">
          <div className="flex items-center justify-center w-full h-1/5">
            <Navbar />
          </div>
          <div className="flex flex-col items-center justify-center w-full h-4/5">
            <h1 className="font-mono text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-b from-slate-50 to-slate-300 font-bold">
              Sociedad de Anestesia
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full h-auto bg-slate-200">
        <History />
      </section>
      <section className="w-full h-auto">
        <Footer />
      </section>
    </div>
  );
}

export default Inicio;
