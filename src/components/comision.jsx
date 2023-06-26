import { BsFillPersonFill } from "react-icons/bs";

const autoridades = [
  {
    puesto: "Presidente",
    nombre: "Dr. Coronel Gustavo",
  },
  {
    puesto: "Secretario General",
    nombre: "Dr. Spolita Carlos",
  },
  {
    puesto: "Secretario de Hacienda",
    nombre: "Dr. Tugores Luciano Manuel",
  },
  {
    puesto: "Secretario Gremial",
    nombre: "Dr. Guzman Sebastian Roberto",
  },
  {
    puesto: "Secretario de Actas",
    nombre: "Dr. Parodi Benjamin Pablo Pedro",
  },
  {
    puesto: "Secretario Científico",
    nombre: "Dr. Ramirez Lucas Hector",
  },
];

const vocalesTitulares = [
  {
    nombre: "1º Dr. Martel Heiland Emiliano",
  },
  {
    nombre: "2º Dr. Romanelli Amilcar Enrique",
  },
  {
    nombre: "3º Dra. Falconi Manuela",
  },
];

const vocalSuplente = [
  {
    nombre: "Dra. Rodríguez Gisela",
  },
];

const revisoraDeCuentas = [
  {
    nombre: "Dra. D'Angelo Florencia Lia",
  },
];

// function Comision() {
//   return (
//     <div className="flex flex-col items-center justify-center w-2/3">
//       <div className="flex items-center justify-start w-full h-28">
//         <h3 className="text-transparent text-2xl bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-900 font-bold">
//           Autoridades
//         </h3>
//       </div>
//       <div className="flex flex-col flex-wrap items-start justify-center w-full h-full gap-4">
//         {autoridades.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col justify-center w-2/3 h-20 gap-2 rounded-xl border border-slate-400 shadow-sm p-8"
//           >
//             <p className="text-base font-medium text-slate-600 text-justify">
//               {item.puesto}
//             </p>
//             <span className="flex flex-row items-center gap-2 text-lg font-bold text-[#004483]">
//               <BsFillPersonFill className="text-[#d54a45]" />
//               {item.nombre}
//             </span>
//           </div>
//         ))}
//       </div>
//       <div className="flex items-center justify-start w-full h-28">
//         <h3 className="text-transparent text-2xl bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-900 font-bold">
//           Vocales Titulares
//         </h3>
//       </div>
//       <div className="flex flex-row flex-wrap items-center justify-start w-full h-full gap-4">
//         {vocalesTitulares.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col justify-center w-2/3 h-20 rounded-xl border border-slate-400 shadow-sm p-8"
//           >
//             <span className="flex flex-row items-center gap-2 text-lg font-bold text-[#004483]">
//               <BsFillPersonFill className="text-[#d54a45]" />
//               {item.nombre}
//             </span>
//           </div>
//         ))}
//       </div>
//       <div className="flex items-center justify-start w-full h-28">
//         <h3 className="text-transparent text-2xl bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-900 font-bold">
//           Vocal Suplente
//         </h3>
//       </div>
//       <div className="flex flex-col flex-wrap items-start justify-center w-full h-full gap-4">
//         {vocalSuplente.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col justify-center w-2/3 h-20 rounded-xl border border-slate-400 shadow-sm p-8"
//           >
//             <span className="flex flex-row items-center gap-2 text-lg font-bold text-[#004483]">
//               <BsFillPersonFill className="text-[#d54a45]" />
//               {item.nombre}
//             </span>
//           </div>
//         ))}
//       </div>
//       <div className="flex items-center justify-start w-full h-28">
//         <h3 className="text-transparent text-2xl bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-900 font-bold">
//           Comisión Revisora de Cuentas
//         </h3>
//       </div>
//       <div className="flex flex-col flex-wrap items-start justify-center w-full h-full gap-4">
//         {revisoraDeCuentas.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col justify-center w-2/3 h-20 rounded-xl border border-slate-400 shadow-sm p-8"
//           >
//             <span className="flex flex-row items-center gap-2 text-lg font-bold text-[#004483]">
//               <BsFillPersonFill className="text-[#d54a45]" />
//               {item.nombre}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

function Comision() {
  return (
    <div className="flex flex-col items-center justify-center w-full md:w-5/6 lg:w-5/6">
      <div className="flex items-center justify-start w-4/5 md:w-full lg:w-full h-20 md:h-28 lg:h-28">
        <h3 className="text-transparent text-lg md:text-2xl lg:text-2xl bg-clip-text bg-gradient-to-b from-neutral-500 to-neutral-800 font-bold">
          Autoridades
        </h3>
      </div>
      <div className="flex flex-col flex-wrap items-start justify-center w-4/5 md:w-full lg:w-full h-full gap-4">
        {autoridades.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center w-full md:w-full lg:w-2/3 h-auto md:h-20 lg:h-20 gap-2 rounded-xl border border-slate-400 shadow-sm p-8"
          >
            <p className="text-base font-medium text-slate-600 text-justify">
              {item.puesto}
            </p>
            <span className="flex flex-row items-center gap-2 text-lg font-bold text-[#004483]">
              <BsFillPersonFill className="text-[#d54a45]" />
              {item.nombre}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-start w-4/5 md:w-full lg:w-full h-20 md:h-28 lg:h-28">
        <h3 className="text-transparent text-lg md:text-2xl lg:text-2xl bg-clip-text bg-gradient-to-b from-neutral-500 to-neutral-800 font-bold">
          Vocales Titulares
        </h3>
      </div>
      <div className="flex flex-col flex-wrap items-start justify-center w-4/5 md:w-full lg:w-full h-full gap-4">
        {vocalesTitulares.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center w-full md:w-full lg:w-2/3 h-auto md:h-20 lg:h-20 gap-2 rounded-xl border border-slate-400 shadow-sm p-8"
          >
            <span className="flex flex-row items-center gap-2 text-lg font-bold text-[#004483]">
              <BsFillPersonFill className="text-[#d54a45]" />
              {item.nombre}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-start w-4/5 md:w-full lg:w-full h-20 md:h-28 lg:h-28">
        <h3 className="text-transparent text-lg md:text-2xl lg:text-2xl bg-clip-text bg-gradient-to-b from-neutral-500 to-neutral-800 font-bold">
          Vocal Suplente
        </h3>
      </div>
      <div className="flex flex-col flex-wrap items-start justify-center w-4/5 md:w-full lg:w-full h-full gap-4">
        {vocalSuplente.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center w-full md:w-full lg:w-2/3 h-auto md:h-20 lg:h-20 gap-2 rounded-xl border border-slate-400 shadow-sm p-8"
          >
            <span className="flex flex-row items-center gap-2 text-lg font-bold text-[#004483]">
              <BsFillPersonFill className="text-[#d54a45]" />
              {item.nombre}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-start w-4/5 md:w-full lg:w-full h-20 md:h-28 lg:h-28">
        <h3 className="text-transparent text-lg md:text-2xl lg:text-2xl bg-clip-text bg-gradient-to-b from-neutral-500 to-neutral-800 font-bold">
          Comisión Revisora de Cuentas
        </h3>
      </div>
      <div className="flex flex-col flex-wrap items-start justify-center w-4/5 md:w-full lg:w-full h-full gap-4">
        {revisoraDeCuentas.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center w-full md:w-full lg:w-2/3 h-auto md:h-20 lg:h-20 gap-2 rounded-xl border border-slate-400 shadow-sm p-8"
          >
            <span className="flex flex-row items-center gap-2 text-lg font-bold text-[#004483]">
              <BsFillPersonFill className="text-[#d54a45]" />
              {item.nombre}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comision;
