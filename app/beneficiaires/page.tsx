import type { Metadata } from "next";
import { ContactBand } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "SylvaGreen Capital — Financer votre scierie ou votre usine de granulés",
  description:
    "Cession-location, location-cession, capital et prêts participatifs : financez séchoirs, broyeurs, presses à granulés et chaudières biomasse sans immobiliser votre trésorerie.",
};

const CDN = "https://cdn.jsdelivr.net/gh/olivierpellegrin-ops/sylvagreen-capital@main";

export default function Beneficiaires() {
  return (
    <main className="page-beneficiaires">
      <div className="hero" id="top" style={{ backgroundImage: "linear-gradient(160deg, rgba(36, 60, 44, 0.9) 0%, rgba(74, 107, 82, 0.6) 50%, rgba(36, 60, 44, 0.86) 100%), url('https://cdn.jsdelivr.net/gh/olivierpellegrin-ops/sylvagreen-capital@main/broyage%20de%20plaquettes%20foresti%C3%A8res.jpeg') center / cover no-repeat" }}>
        <div className="hero-bg"></div>
        <div className="wrap">
          <span className="kicker">Scieries · Usines de granulés · Équipements</span>
          <h1>Modernisez votre outil industriel !</h1>
          <p className="lead">
            Séchoirs, broyeurs, presses à granulés, chaudières biomasse : des financements sur
            mesure qui préservent votre trésorerie, votre indépendance et votre ancrage local.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="https://rdv.sylvagreen-capital.fr?profil=beneficiaire" target="_blank" rel="noopener">
              Prendre rendez-vous
            </a>
            <a className="btn btn-ghost" href="#produits">Découvrir nos produits</a>
          </div>
        </div>
      </div>

      <section id="mission">
        <div className="wrap">
          <span className="kicker">Notre mission</span>
          <h2>Des capitaux pour la première transformation du bois</h2>
          <div className="mission-grid">
            <div className="mission-txt">
              <p>
                Les scieries et les usines de granulation portent l&apos;avenir énergétique de nos
                territoires. Pourtant, entre séchoirs vétustes, broyeurs obsolètes et connexes
                sous-valorisés, la première transformation manque de capitaux pour franchir le
                cap.
              </p>
              <p style={{ marginTop: 14 }}>
                <strong>SylvaGreen Capital finance la modernisation, l&apos;innovation et la
                valorisation de vos outils</strong>, avec des produits sur mesure qui respectent
                votre indépendance et votre ancrage familial.
              </p>
            </div>
            <div className="mission-img" style={{ backgroundImage: `url('${CDN}/stock_ext%C3%A9rieur_bois_rond.jpg')` }}></div>
          </div>
        </div>
      </section>

      <section style={{ background: "#eef0e8" }} id="produits">
        <div className="wrap">
          <span className="kicker">Nos produits financiers à votre disposition</span>
          <h2>Sur mesure, de l&apos;équipement au capital</h2>
          <div className="solutions">
            <div className="sol"><span className="num">01</span>
              <h3>Cession-location</h3>
              <span className="tag">Investir sans immobiliser</span>
              <p>Le fonds acquiert l&apos;équipement et vous le met à disposition contre un loyer. Vous gardez votre trésorerie disponible.</p>
              <div className="sit"><b>Mise en situation —</b> votre séchoir arrive en fin de vie : le fonds finance le nouvel équipement, vous produisez avec dès la mise en route.</div>
            </div>
            <div className="sol"><span className="num">02</span>
              <h3>Location-cession</h3>
              <span className="tag">Devenir propriétaire au terme</span>
              <p>Vous utilisez la machine financée par le fonds et en devenez propriétaire au terme du contrat : une trajectoire d&apos;acquisition maîtrisée.</p>
              <div className="sit"><b>Mise en situation —</b> une presse à granulés neuve pour doubler votre capacité, sans accentuer votre endettement bancaire.</div>
            </div>
            <div className="sol"><span className="num">03</span>
              <h3>Capital &amp; prêts participatifs</h3>
              <span className="tag">Croissance · Transmission</span>
              <p>Renforcement des fonds propres ou prêt long terme, y compris pour la transmission d&apos;entreprises familiales, sans dilution de votre mainmise.</p>
              <div className="sit"><b>Mise en situation —</b> reprendre l&apos;atelier familial et lancer l&apos;optimisation de la production tant repoussée.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="cas">
        <div className="wrap">
          <span className="kicker">Concrètement, sur le terrain</span>
          <h2>Cela ressemble à quoi chez vous ?</h2>
          <div className="scen-grid">
            <div className="scen">
              <img src={`${CDN}/broyage%20de%20plaquettes%20foresti%C3%A8res.jpeg`} alt="Broyage de plaquettes forestières" />
              <div className="in">
                <span className="who">Scierie</span>
                <h3>Plaquettes forestières valorisées</h3>
                <p>
                  Vos connexes partent en vrac, à bas prix, et une partie des plaquettes forestières
                  du territoire vous échappe. Le fonds finance votre broyeur en cession-location :
                  vous broyez plaquettes forestières et chutes de délignage pour vendre aux
                  granulateurs voisins.
                </p>
                <p className="res"><b>Résultat :</b> des connexes qui deviennent de la marge, et une trésorerie intacte.</p>
              </div>
            </div>
            <div className="scen">
              <img src={`${CDN}/usine%20de%20granul%C3%A9%20associ%C3%A9%20%C3%A0%20une%20scierie.jpeg`} alt="Usine de granulés associée à une scierie" />
              <div className="in">
                <span className="who">Usine de granulés</span>
                <h3>Monter en puissance, sécuriser la ressource</h3>
                <p>
                  La demande grimpe, mais votre broyeur ou votre presse plafonne la capacité de
                  production. En location-cession, le fonds équipe votre atelier pour garantir
                  votre rentabilité : broyeur, presse à granulés, manutention et stockage.
                </p>
                <p className="res"><b>Résultat :</b> une capacité accrue et un plan de propriétariat progressif.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#eef0e8" }} id="avantages">
        <div className="wrap">
          <span className="kicker">Avantages · Parcours</span>
          <h2>Ce que cela change pour vous</h2>
          <div className="twocol">
            <div className="list-card lc-benefices">
              <h3>Six bénéfices concrets</h3>
              <ul>
                <li>Aucune immobilisation de trésorerie pour vos équipements critiques</li>
                <li>Loyers et intérêts déductibles du résultat imposable</li>
                <li>Un partenaire qui parle « séchage, déligneuse, presse », pas un jargon financier</li>
                <li>Une assise financière qui sécurise vos cofinancements bancaires</li>
                <li>Accompagnement sur les aides : nationales, régionales, pour les usines et les fonds de transition énergétique</li>
                <li>Une gouvernance respectueuse de l&apos;indépendance et de l&apos;ancrage familial</li>
              </ul>
            </div>
            <div className="list-card">
              <h3>Du premier appel au financement</h3>
              <ol className="steps-list">
                <li><b>Premier rendez-vous.</b> Autour de vos projets : équipements, capacités, calendrier.</li>
                <li><b>Visite &amp; diagnostic.</b> Nos experts sur site vous conseillent au mieux de vos capacités de production.</li>
                <li><b>Montage sur mesure.</b> Cession-location, location-cession, capital ou prêt — et les aides mobilisables.</li>
                <li><b>Financement &amp; suivi.</b> Signature, mise en route, accompagnement opérationnel durable.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <ContactBand
        kicker="Contact bénéficiaires"
        title="Parlons de votre atelier"
        text="Dirigeant de scierie ou d'usine de granulés : première rencontre sans engagement."
        profil="beneficiaire"
      />
    </main>
  );
}
