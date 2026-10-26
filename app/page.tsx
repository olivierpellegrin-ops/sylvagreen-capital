import Link from "next/link";
import { ContactBand } from "./components/SiteChrome";

export default function Home() {
  return (
    <>
      <div className="hero" id="top">
        <div className="hero-bg"></div>
        <div className="wrap">
          <span className="kicker">Fonds professionnel « vert » · Filière bois française · 2026</span>
          <h1>Le capital-investissement au service de la filière bois française</h1>
          <p className="lead">
            Nous finançons la modernisation des scieries et des usines de granulés — et nous
            offrons aux investisseurs un placement dans une niche que nous connaissons de
            l&apos;intérieur.
          </p>
        </div>
      </div>

      <section id="cibles">
        <div className="wrap">
          <span className="kicker">Deux promesses, un même fonds</span>
          <h2>Vous êtes…</h2>
          <p className="lead">
            Un même fonds, une même équipe, une même conviction : la filière bois française
            mérite des capitaux patients et compétents. Choisissez votre porte.
          </p>
          <div className="doors">
            <div className="door door-ben">
              <span className="door-label">Scieries · Usines de granulés</span>
              <h3>Vous dirigez un outil industriel de la filière</h3>
              <p>
                Financez séchoirs, broyeurs, presses à granulés et chaudières biomasse sans
                immobiliser votre trésorerie et sans vous déposséder de votre entreprise.
              </p>
              <Link className="btn btn-primary" href="/beneficiaires">
                Je cherche un financement
              </Link>
            </div>
            <div className="door door-inv">
              <span className="door-label">Investisseurs</span>
              <h3>Vous souhaitez investir dans la filière bois</h3>
              <p>
                Un fonds professionnel dédié à la première transformation, géré par des
                industriels du secteur, dans une niche peu adressée par les fonds généralistes.
              </p>
              <Link className="btn btn-ghost" href="/investisseurs">
                Je souhaite investir
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#eef0e8" }} id="filiere">
        <div className="wrap">
          <span className="kicker">La filière en chiffres</span>
          <h2>Un marché présent, une filière sous-financée</h2>
          <div className="hero-figs" style={{ marginTop: 30 }}>
            <div className="fig-inv">
              <b>40 %</b>
              <span>des énergies renouvelables françaises proviennent du bois-énergie</span>
            </div>
            <div className="fig-inv">
              <b>2,4 Mt</b>
              <span>de granulés consommés par an en France, dont 90 % produits localement</span>
            </div>
            <div className="fig-inv">
              <b>3 ans</b>
              <span>en moyenne d&apos;un projet d&apos;usine jusqu&apos;au premier granulé produit</span>
            </div>
          </div>
          <blockquote className="quote" style={{ marginTop: 34 }}>
            « La filière a les moyens de se développer au niveau national, de dynamiser les
            territoires en créant de l&apos;activité et de l&apos;emploi local. La construction
            d&apos;usines nécessite des investissements lourds et prend du temps : en moyenne 3 ans
            du projet jusqu&apos;au premier granulé produit. »
            <cite>
              — Éric Vial, délégué général de Propellet France — Panorama de la production de
              granulés
            </cite>
          </blockquote>
        </div>
      </section>

      <section id="conviction">
        <div className="wrap">
          <span className="kicker">Notre conviction</span>
          <h2>Des capitaux compétents, là où ils manquent</h2>
          <p className="lead" style={{ maxWidth: 760 }}>
            <strong>Les scieries manquent de capitaux.</strong> Séchoirs vétustes, broyeurs
            obsolètes, connexes sous-valorisés : la première transformation sous-investit, quand
            les granuleurs cherchent une ressource locale sécurisée. <strong>Notre mission :</strong>{" "}
            financer la modernisation, l&apos;innovation et la valorisation de la première
            transformation du bois.
          </p>
          <div className="band-img" style={{ backgroundImage: "linear-gradient(rgba(14, 38, 32, 0.25), rgba(14, 38, 32, 0.25)), url('https://cdn.jsdelivr.net/gh/olivierpellegrin-ops/sylvagreen-capital@main/stock_ext%C3%A9rieur_bois_rond.jpg')" }}></div>
          <div className="teaser">
            <div className="card">
              <b>60 ans</b>
              <p>d&apos;expertise cumulée, de la 1ère transformation au granulé</p>
              <Link href="/gouvernance">Découvrir l&apos;équipe →</Link>
            </div>
            <div className="card">
              <b>50 projets</b>
              <p>soutenus dans les scieries et les usines de granulation, en France et à l&apos;étranger</p>
              <Link href="/gouvernance">Notre gouvernance →</Link>
            </div>
          </div>
        </div>
      </section>

      <ContactBand
        kicker="Contact"
        title="Parlons de votre projet"
        text="Investisseur potentiel ou dirigeant de la filière : première rencontre sans engagement."
        profil="accueil"
      />
    </>
  );
}
