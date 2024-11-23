import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(1);

  const navLinks = [
    { id: 1, name: "Home", target: "home" },
    { id: 2, name: "About", target: "about" },
    { id: 3, name: "Skills", target: "skills" },
    { id: 4, name: "Projects", target: "projects" },
    { id: 5, name: "Contact", target: "contact" }
  ];

  return (
    <div className="bg-darkBlue py-7 shadow-lg w-full">
      <div className="container flex w-full items-center justify-between md:flex-row flex-col gap-3 mx-auto px-4">
        <div className="logo">
          <h2 className="text-white text-[28px] font-medium font-Preahvihear">
            Sa
            <span className="font-medium font-Preahvihear text-[28px] text-lightPurple">
              R
            </span>
            a
          </h2>
        </div>
        <ul className="flex items-center gap-3 justify-between">
          {navLinks.map((nav) => {
            return (
              <li
                key={nav.id}
                className={`sm:text-[20px] cursor-pointer m-0 font-medium font-Preahvihear text-white ${active === nav.id ? "border-b-2 border-lightPurple" : ""}`}
                onClick={() => setActive(nav.id)}
              >
                <a href={`#${nav.target}`} className="text-white" style={{ textDecoration: 'none' }}>{nav.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
