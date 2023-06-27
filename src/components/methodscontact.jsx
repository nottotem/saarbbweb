import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function MethodsContact() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center md:w-4/5 lg:w-full h-auto gap-4 md:gap-10 lg:gap-20">
      <div className="flex flex-col items-center justify-center h-36 md:h-44 lg:h-44 w-64 md:w-64 lg:w-64 rounded-xl shadow border border-slate-400">
        <div className="flex items-center w-5/6 h-3/5">
          <p className="text-[#d54a45] text-5xl md:text-7xl lg:text-7xl">
            <MdOutlinePhoneIphone />
          </p>
        </div>
        <div className="flex items-end w-5/6 h-1/5">
          <p className="text-transparent text-base md:text-xl lg:text-xl bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-900 font-medium">
            Teléfono
          </p>
        </div>
        <div className="flex items-start w-5/6 h-1/5">
          <p className="text-transparent text-sm md:text-base lg:text-base bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-900 font-medium">
            291 536-5702 | 5170671
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-36 md:h-44 lg:h-44 w-64 md:w-64 lg:w-64 rounded-xl shadow border border-slate-400">
        <div className="flex items-center w-5/6 h-3/5">
          <p className="text-[#d54a45] text-5xl md:text-7xl lg:text-7xl">
            <MdLocationOn />
          </p>
        </div>
        <div className="flex items-end w-5/6 h-1/5">
          <p className="bg-red-500 text-transparent text-base md:text-xl lg:text-xl bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-900 font-medium">
            Dirección
          </p>
        </div>
        <div className="flex items-start w-5/6 h-1/5">
          <p className="text-transparent text-sm md:text-base lg:text-base bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-900 font-medium">
            Patricios 282
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-36 md:h-44 lg:h-44 w-64 md:w-64 lg:w-64 rounded-xl shadow border border-slate-400">
        <div className="flex items-center w-5/6 h-3/5">
          <p className="text-[#d54a45] text-5xl md:text-7xl lg:text-7xl">
            <MdEmail />
          </p>
        </div>
        <div className="flex items-end w-5/6 h-1/5">
          <p className="bg-red-500 text-transparent text-base md:text-xl lg:text-xl bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-900 font-medium">
            Email
          </p>
        </div>
        <div className="flex items-start w-5/6 h-1/5">
          <p className="text-transparent text-sm md:text-base lg:text-base bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-900 font-medium">
            saarbb@bvconline.com.ar
          </p>
        </div>
      </div>
    </div>
  );
}

export default MethodsContact;
