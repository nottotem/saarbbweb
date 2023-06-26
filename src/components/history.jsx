// import uno from "../media/uno.jpg";
// import dos from "../media/dos.jpg";
import logo from "../media/logo.png";
import saarbb from "../media/saarbb.jpg";

function History() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex items-center justify-center w-full h-20 md:h-28 lg:h-36">
        <h3 className="text-transparent text-lg md:text-3xl lg:text-4xl bg-clip-text bg-gradient-to-b from-slate-500 to-slate-800 font-bold">
          Historia de la sociedad
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center w-5/6 md:w-4/6 lg:w-4/6 h-auto bg-gradient-to-b from-slate-200 via-slate-50 to-slate-200 pb-14 rounded-b-xl lg:gap-8">
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center w-full h-1/2 gap-8">
          <div className="flex flex-col items-center justify-center w-full md:w-full lg:w-1/2 h-full gap-4">
            <span className="w-4/5 text-sm md:text-base lg:text-base font-medium text-justify text-slate-600">
              Por los años 90 un grupo de anestesiólogos de Bahía Blanca y la
              zona, en representación de los anestesiólogos de las distintas
              centros asistenciales, deciden reunirse para conformar una
              sociedad de médicos anestesiólogos con el fin de jerarquizar la
              especialidad, asegurar puestos de trabajo y promover la
              capacitación continua, concretando esto mediante la firma de acta
              de compromiso.
            </span>
            <span className="w-4/5 text-sm md:text-base lg:text-base font-medium text-justify text-slate-600">
              Varias reuniones mediante, con asesoramiento de FAAAAR Y otras
              asociaciones más antiguas, se conforma la Comisión directiva, cuyo
              primer presidente fue el Dr. Roberto Farias.
            </span>
            <span className="w-4/5 text-sm md:text-base lg:text-base font-medium text-justify text-slate-600">
              Dos años después, 14 de Octubre de 1992, con la redacción y firma
              de Acta Constitutiva y Estatuto, se inaugura legalmente La
              Asociación civil denominada Sociedad de Anestesiología de Bahía
              Blanca, siendo oficializada el 25 de Febrero de 1993.
            </span>
          </div>
          <div className="flex items-center justify-center w-1/3 md:w-1/3 lg:w-1/2 h-full">
            <img
              src={logo}
              alt="firstimage"
              className="hidden md:hidden lg:flex items-center justify-center w-full md:w-full lg:w-5/6 h-auto brightness-75"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center w-full h-1/2 gap-8">
          <div className="flex items-center justify-center w-5/6 md:w-5/6 lg:w-1/2 h-full">
            <img
              src={saarbb}
              alt="firstimage"
              className="rounded-md shadow-sm shadow-slate-500 w-5/6 md:w-5/6 lg:w-5/6 h-auto brightness-75"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-full lg:w-1/2 h-full gap-4">
            <span className="w-4/5 text-sm md:text-base lg:text-base font-medium text-justify text-slate-600">
              Con el transcurso de los años, con varios recambios de la comisión
              directiva (Presidentes: Dr. Roberto Farias, Dr. Claudio Morlan,
              Dr. Carlos Spolita, Dra. Norma Wust, Dr. Calixto Barrionuevo, Dr.
              Carlos Quiroga) se fueron obteniendo importantes logros.
            </span>
            <span className="w-4/5 text-sm md:text-base lg:text-base font-medium text-justify text-slate-600">
              Durante la última gestión hemos adquirido nuestra Sede Propia,
              inaugurada el 20 de Diciembre del 2020.
            </span>
            <span className="w-4/5 text-sm md:text-base lg:text-base font-medium text-justify text-slate-600">
              Todo esto nos ha permitido acceder a todas las actividades
              académicas abaladas por la FAAAAR, al curso universitario de la
              carrera de especialista dictada por AAARBA (en comunión con la
              Universidad de Bs As), concretar convenios con la mayoría de las
              Obras Sociales y de esta forma velar por la seguridad de nuestros
              pacientes.
            </span>
            <span className="w-4/5 text-sm md:text-base lg:text-base font-medium text-justify text-slate-600">
              Aprovechamos para agradecerles a quienes han ido luchando, y aún
              lo siguen haciendo, por el crecimiento de esta sede.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
