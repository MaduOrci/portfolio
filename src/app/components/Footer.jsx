import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex items-center justify-between">
        <img
          src="/images/logo.jpg"
          alt="logo"
          style={{ width: "130px", borderRadius: "20px" }}
        />{" "}
        <p className="text-slate-600">Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
