import Link from "next/link";
import MobileNav from "./MobileNav";

export const LOGO =
  "https://cdn.jsdelivr.net/gh/olivierpellegrin-ops/sylvagreen-capital@main/SylvaGreen%20Capital%20-%20horizontal.png";

const CDN = "https://cdn.jsdelivr.net/gh/olivierpellegrin-ops/sylvagreen-capital@main";

export function Header() {
  return (
    <header>
      <div className="wrap nav">
        <Link className="brand" href="/" title="SylvaGreen Capital">
          <img className="brand-logo" src={LOGO} alt="SylvaGreen Capital" />
        </Link>
        <nav className="nav-links">
          <Link href="/">Accueil</Link>
          <Link href="/investisseurs">Investisseurs</Link>
          <Link href="/beneficiaires">Bénéficiaires</Link>
          <Link href="/gouvernance">Gouvernance</Link>
          <a
            className="nav-rdv"
            href="https://rdv.sylvagreen-capital.fr"
            target="_blank"
            rel="noopener"
          >
            Prendre rendez-vous
          </a>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <img className="footer-logo" src={LOGO} alt="SylvaGreen Capital" />
        <div className="footer-links">
          <Link href="/investisseurs">Je souhaite investir</Link>
          <span>·</span>
          <Link href="/beneficiaires">Je cherche un financement</Link>
          <span>·</span>
          <Link href="/gouvernance">Gouvernance</Link>
        </div>
        <p className="footer-copy">
          © 2026 SylvaGreen Capital — Tous droits réservés. Fonds professionnel géré par
          SylvaGreen Management (société de gestion en cours d&apos;agrément AMF).
        </p>
      </div>
    </footer>
  );
}

export function ContactBand({
  kicker,
  title,
  text,
  profil,
}: {
  kicker: string;
  title: string;
  text: string;
  profil: string;
}) {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <span className="kicker">{kicker}</span>
            <h2>{title}</h2>
            <p>{text}</p>
            <div style={{ marginTop: 26 }}>
              <a
                className="btn btn-primary"
                href={`https://rdv.sylvagreen-capital.fr?profil=${profil}`}
                target="_blank"
                rel="noopener"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-gerant">
              <img
                src={`${CDN}/olivier%20pellegrin.jpeg`}
                alt="Olivier Pellegrin"
                width={88}
                height={88}
              />
              <div>
                <h3 style={{ color: "#fff", marginBottom: 2 }}>Olivier PELLEGRIN</h3>
                <p className="role" style={{ fontSize: 13.5, color: "#c9d4cc" }}>
                  Gérant de SylvaGreen Management
                </p>
              </div>
            </div>
            <div>
              <b>Téléphone</b>
              <a href="tel:+33617793908">06 17 79 39 08</a>
            </div>
            <div>
              <b>E-mail</b>
              <a href="mailto:olivier.pellegrin@sylvagreen-capital.fr">
                olivier.pellegrin@sylvagreen-capital.fr
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
