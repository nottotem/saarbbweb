import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    { to: "/", label: "Inicio" },
    { to: "/institucional", label: "Institucional" },
    { to: "/comunidad", label: "Comunidad" },
    { to: "/faq", label: "FAQ" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-row items-center justify-center w-auto h-full gap-6">
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            <button className="h-2/3 text-slate-50 hover:text-slate-300 font-medium text-sm md:text-base">
              {link.label}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
