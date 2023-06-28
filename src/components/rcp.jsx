import rcpuno from "../media/rcpuno.jpg";
import rcpdos from "../media/rcpdos.jpg";
import rcptres from "../media/rcptres.jpg";
import rcpsiete from "../media/rcpsiete.jpg";
import rcpcinco from "../media/rcpcinco.jpg";

function RCP() {
  return (
    <div className="flex flex-col items-center justify-center w-5/6 lg:w-1/2 h-auto gap-4 lg:gap-8 py-8 lg:py-16">
      <div className="flex items-center justify-center w-full h-auto">
        <h2 className="text-transparent text-md md:text-xl lg:text-3xl bg-clip-text bg-gradient-to-b from-slate-500 to-slate-800 font-bold">
          Jornada de RCP a la comunidad
        </h2>
      </div>
      <div className="flex items-center justify-center w-5/6 h-auto">
        <img
          src={rcpsiete}
          alt="tres"
          className="w-auto h-1/2 rounded-xl brightness-75 shadow-sm"
        />
      </div>
      <div className="flex items-center justify-center w-5/6 h-auto">
        <span className="flex items-center justify-center text-sm lg:text-base font-medium text-slate-600 text-justify">
          El sábado 22 de octubre del 2022 se llevo a cabo el curso de
          Reanimación Cardio Pulmonar a la comunidad en el club La Esperanza. Se
          realizaron cuatro turnos de 45 minutos cada uno, donde se brindó
          información y luego se llevo a cabo la practica con muñecos de RCP.
        </span>
      </div>
      <div className="flex flex-row items-center justify-center w-5/6 4/5 h-auto gap-2">
        <div className="w-1/2 h-auto">
          <img
            src={rcpuno}
            alt="uno"
            className="w-auto h-1/2 rounded-xl brightness-75 shadow-sm"
          />
        </div>
        <div className="w-1/2 h-auto">
          <img
            src={rcptres}
            alt="dos"
            className="w-auto h-1/2 rounded-xl brightness-75 shadow-sm"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-5/6 h-auto gap-4">
        <p className="flex items-center justify-start text-sm lg:text-base font-bold text-[#004483] w-full">
          ¿Por qué es importante saber hacer RCP?
        </p>
        <span className="flex items-center justify-center text-sm lg:text-base font-medium text-slate-600 text-justify">
          A pesar de los avances recientes, menos del 40% de los adultos recibe
          RCP inicida por personas sin experiencia médica, y en menos del 12% se
          utiliza un DEA antes de la legada del SEM.
        </span>
      </div>
      <div className="flex flex-row lg:flex-row items-center justify-center w-5/6 4/5 h-auto gap-2">
        <div className="w-1/2 lg:w-1/2 h-auto">
          <img
            src={rcpdos}
            alt="uno"
            className="w-auto h-1/2 rounded-xl brightness-75 shadow-sm"
          />
        </div>
        <div className="w-1/2 lg:w-1/2 h-auto">
          <img
            src={rcpcinco}
            alt="dos"
            className="w-auto h-1/2 rounded-xl brightness-75 shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default RCP;
