"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/investisseurs", label: "Investisseurs" },
    { href: "/beneficiaires", label: "Bénéficiaires" },
    { href: "/gouvernance", label: "Gouvernance" },
  ];
  return (
    <div className="mnav">
      <button
        className={"mnav-btn" + (open ? " open" : "")}
        aria-label="Menu de navigation"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
      {open && (
        <div className="mnav-panel" onClick={close}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={close}>
              {l.label}
            </Link>
          ))}
          <a
            className="nav-rdv"
            href="https://rdv.sylvagreen-capital.fr"
            target="_blank"
            rel="noopener"
            onClick={close}
          >
            Prendre rendez-vous
          </a>
        </div>
      )}
    </div>
  );
}
