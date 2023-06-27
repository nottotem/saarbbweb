function Footer() {
  return (
    <div className="flex items-center justify-center w-full h-16 bg-slate-100">
      <p className="font-mono text-sm md:text-base lg:text-base text-slate-400">
        {new Date().getFullYear()} SAARBB. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
