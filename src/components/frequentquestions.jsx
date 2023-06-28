import { HiOutlineArrowDownRight } from "react-icons/hi2";

const FAQ = [
  {
    pregunta: "¿Qué es la anestesia?",
    respuesta:
      "La palabra 'anestesia' se refiere a la falta de sensibilidad y sensación. Gracias a los avances tecnológicos y médicos actuales, es posible someterse a una cirugía sin experimentar dolor alguno, ya sea que esté consciente o no durante la anestesia, sin importar la duración de la intervención.",
  },
  {
    pregunta: "¿Para ser anestesiólogo hay que ser médico?",
    respuesta:
      "La Anestesiología es una especialidad médica que requiere una formación extensa de 10 años. El anestesiólogo aprende a manejar fármacos y equipos específicos, así como a interpretar datos médicos del paciente. Se encarga de seleccionar la anestesia adecuada, supervisar el proceso anestésico durante la operación y garantizar el bienestar del paciente después de la cirugía.",
  },
  {
    pregunta: "¿Cuáles son los efectos secundarios de la anestesia?",
    respuesta:
      "Es normal que un paciente se pregunte acerca de las posibles complicaciones o efectos secundarios de la anestesia. En general, los efectos secundarios suelen ser leves y de corta duración, y pueden ser causados tanto por los medicamentos utilizados como por el tipo de procedimiento. Algunos de los efectos secundarios más comunes incluyen una ligera molestia en la garganta, náuseas, vómitos, mareos y dolores de cabeza. Si el paciente está preocupado por estos u otros posibles efectos, es importante que lo comunique al anestesiólogo durante la entrevista previa a la anestesia. El anestesiólogo está capacitado para prevenir y tratar estos efectos en caso de que ocurran.",
  },
  {
    pregunta: "¿Qué necesitamos para darle seguridad al paciente?",
    respuesta:
      "Se inicia con una adecuada formación y educación de los equipos humanos de salud, se continúa con una gestión organizacional eficaz y se termina con políticas gubernamentales actualizadas. Sin la integración de estos tres niveles, no hay seguridad para el paciente. En la actualidad, el anestesiólogo es una pieza clave del equipo quirúrgico en lo referente a la seguridad del paciente, lo cual requiere una práctica reflexiva ajustada a los estándares de tratamientos actuales, en el marco de un sistema de atención capaz de aprender de esos errores.",
  },
];

function FrecuentQuestions() {
  return (
    <div className="flex flex-col items-center justify-center w-full md:w-5/6 lg:w-4/6 h-full gap-10">
      {FAQ.map((item, index) => (
        <div
          key={index}
          className="flex flex-col w-11/12 md:w-5/6 lg:w-5/6 h-auto gap-4 rounded-xl border border-slate-400 shadow-sm p-8"
        >
          <p className="flex flex-row gap-2 text-lg md:text-2xl lg:text-2xl font-bold text-[#004483]">
            <HiOutlineArrowDownRight className="text-[#d54a45]" />{" "}
            {item.pregunta}
          </p>
          <span className="text-sm md:text-base lg:text-base font-medium text-slate-600 text-justify">
            {item.respuesta}
          </span>
        </div>
      ))}
    </div>
  );
}

export default FrecuentQuestions;
