import type { Metadata } from "next";
import { ContactBand } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "SylvaGreen Capital — Investir dans la première transformation du bois",
  description:
    "Fonds professionnel dédié à la filière bois : 12 % de rendement brut annuel minimum visé, revenus récurrents dès la première année, équipe issue de l'industrie du bois.",
};

export default function Investisseurs() {
  return (
    <main>
      <div className="hero" id="top">
        <div className="hero-bg"></div>
        <div className="wrap">
          <span className="kicker">Investisseurs · Rendement · Niche filière bois</span>
          <h1>Investir au cœur de la filière bois, du capital à l&apos;équipement</h1>
          <p className="lead">
            Un rendement brut annuel minimum de 12 % visé, des revenus récurrents dès la première
            année, et des actifs que nous comprenons techniquement : scieries, connexes,
            granulation, biomasse.
          </p>
          <div className="hero-figs">
            <div className="fig"><b>500 k€/an</b><span>de souscriptions investisseurs, 10 ans de déploiement</span></div>
            <div className="fig"><b>6,7 M€</b><span>investis pendant 10 ans en produits financiers</span></div>
            <div className="fig"><b>12 %</b><span>de rendement brut annuel minimum visé</span></div>
          </div>
        </div>
      </div>

      <section id="marche">
        <div className="wrap">
          <span className="kicker">Marché · Objectif · Modèle économique</span>
          <h2>Un fonds adapté, pour une filière à fort potentiel</h2>
          <p className="lead">
            <strong>Le marché est là.</strong> Le bois-énergie fournit 40 % des énergies
            renouvelables françaises ; la filière granulés draine 2,4 millions de tonnes consommées
            par an, dont 90 % produites en France.
          </p>
          <p className="lead" style={{ marginTop: 16 }}>
            <strong>Mais les scieries manquent de capitaux.</strong> Séchoirs vétustes, broyeurs
            obsolètes, connexes sous-valorisés : la première transformation sous-investit, quand les
            granulateurs cherchent une ressource locale sécurisée. <strong>Notre objectif :</strong>{" "}
            mieux valoriser les connexes des scieries — sciures, copeaux, délignage — au profit des
            producteurs de granulés. <strong>Notre mission :</strong> financer la modernisation,
            l&apos;innovation et la valorisation de la première transformation du bois.
          </p>
          <blockquote className="quote" style={{ marginTop: 34 }}>
            « La filière a les moyens de se développer au niveau national, de dynamiser les
            territoires en créant de l&apos;activité et de l&apos;emploi local. La construction
            d&apos;usines nécessite des investissements lourds et prend du temps : en moyenne 3 ans
            du projet jusqu&apos;au premier granulé produit. »
            <cite>— Éric Vial, délégué général de Propellet France — Panorama de la production de granulés</cite>
          </blockquote>
          <div className="band-img" style={{ backgroundImage: "linear-gradient(rgba(14, 38, 32, 0.25), rgba(14, 38, 32, 0.25)), url('https://cdn.jsdelivr.net/gh/olivierpellegrin-ops/sylvagreen-capital@main/stock_ext%C3%A9rieur_bois_rond.jpg')" }}></div>
        </div>
      </section>

      <section style={{ background: "#eef0e8" }} id="mecanique">
        <div className="wrap">
          <div className="band-label">Le fonds en chiffres — simulation 10 ans (capital + cession-location)</div>
          <h2 style={{ fontSize: 24 }}>Une mécanique de valeur éprouvée</h2>
          <div className="stats">
            <div className="stat"><b>5,15 M€</b><span>de souscriptions (dont vintage 2026)</span></div>
            <div className="stat"><b>6,66 M€</b><span>investis au total (capital + cession-location)</span></div>
            <div className="stat"><b>700 k€</b><span>de loyers encaissés sur la fenêtre 10 ans</span></div>
            <div className="stat"><b>3,85 M€</b><span>d&apos;encours en capital fin 2036</span></div>
            <div className="stat"><b>8,03 M€</b><span>de valeur nette libérée aux closings</span></div>
          </div>
          <div className="phases">
            <div className="phase">
              <div className="years">2027 — 2030</div>
              <h3>Lancement</h3>
              <p>
                <strong>30 % capital / 70 % cession-location.</strong> Chaque année, 150 k€ en
                prises de capital et 300 k€ en contrats de cession-location d&apos;équipements
                (loyers de 10 %/an sur 5 ans) : des revenus récurrents dès la première année, qui
                sécurisent la trésorerie pendant la montée en puissance du portefeuille.
              </p>
            </div>
            <div className="phase">
              <div className="years">À partir de 2031</div>
              <h3>Fonds stabilisé</h3>
              <p>
                <strong>100 % prises de capital, closings réinvestis.</strong> Les libérations de
                capital (5 ans) alimentent la machine : 70 % des closings sont réinvestis dans de
                nouvelles participations, 30 % distribués aux investisseurs. Premières
                distributions dès 2031.
              </p>
            </div>
          </div>
          <div className="mech">
            <div className="card"><b>1,5 %/an</b><span>frais de gestion sur l&apos;encours, prélevés sur les actifs du fonds</span></div>
            <div className="card"><b>8 %</b><span>hurdle rate : le carried ne joue qu&apos;au-delà de 8 %/an pour les investisseurs</span></div>
            <div className="card"><b>20 %</b><span>carried interest du gestionnaire sur la seule superformance</span></div>
            <div className="card"><b>70/30</b><span>réinvestissement / distribution des closings, transparent et réglementé</span></div>
          </div>
        </div>
      </section>

      <section id="solutions">
        <div className="wrap">
          <span className="kicker">Nos solutions financières</span>
          <h2>Des produits sur mesure, du capital aux équipements</h2>
          <div className="solutions">
            <div className="sol"><span className="num">01</span>
              <h3>Prises de capitaux</h3>
              <span className="tag">Capital · Croissance · Transmission</span>
              <p>
                Entrée minoritaire ou majoritaire au capital des scieries, granulateurs et
                industriels de la filière : 12 %/an de rendement brut visé, horizon de 5 ans par
                vintage, y compris pour la transmission d&apos;entreprises familiales.
              </p>
            </div>
            <div className="sol"><span className="num">02</span>
              <h3>Cession-location</h3>
              <span className="tag">Loyers 10 %/an · 5 ans</span>
              <p>
                70 % du déploiement des premières années : financement ou refinancement de
                séchoirs, broyeurs, presses à granulés et chaudières biomasse. L&apos;entreprise
                libère du capital productif sans dilution.
              </p>
            </div>
            <div className="sol"><span className="num">03</span>
              <h3>Prêts participatifs</h3>
              <span className="tag">Quasi-fonds propres · Sans dilution</span>
              <p>
                Financement long terme adapté aux entreprises familiales qui veulent investir
                lourdement tout en conservant la mainmise sur leur outil industriel.
              </p>
            </div>
          </div>
          <div className="twocol">
            <div className="list-card lc-dirigeants">
              <h3>Pour les dirigeants de la filière</h3>
              <ul>
                <li>Un interlocuteur qui parle « séchage, déligneuse, presse à granulés », pas seulement « retour sur capital »</li>
                <li>Des montages qui respectent l&apos;indépendance et l&apos;ancrage familial</li>
                <li>Accès à notre connaissance des aides et subventions (bois-énergie, chaleur, transition)</li>
                <li>Effet de levier bancaire : l&apos;assise du fonds sécurise les cofinancements des partenaires</li>
                <li>Traitement fiscal favorable : loyers et intérêts déductibles du résultat imposable</li>
              </ul>
            </div>
            <div className="list-card lc-investisseurs">
              <h3>Pour les investisseurs</h3>
              <ul>
                <li>Revenus récurrents dès l&apos;an 1 grâce aux loyers de cession-location (700 k€ sur 10 ans dans notre modèle)</li>
                <li>Distributions annuelles à partir de 2031 : 30 % de chaque closing, réinvestissement de 70 % en capital</li>
                <li>Alignement d&apos;intérêts : hurdle rate de 8 % avant tout carried interest de 20 %</li>
                <li>Une niche peu adressée : PME de la 1ère transformation, hors radars des fonds généralistes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#eef0e8" }} id="processus">
        <div className="wrap">
          <span className="kicker">Méthode</span>
          <h2>Notre processus d&apos;investissement</h2>
          <div className="steps">
            <div className="step"><h4>Sourcing</h4><p>Prospection terrain au sein de notre réseau filière</p></div>
            <div className="step"><h4>Due diligence technique</h4><p>Audit machines, marché, approvisionnement, comparables</p></div>
            <div className="step"><h4>Comité d&apos;investissement</h4><p>Décision collégiale sur dossier instruit par le gérant</p></div>
            <div className="step"><h4>Financement</h4><p>Montage sur mesure : capital, cession-location ou prêt</p></div>
            <div className="step"><h4>Accompagnement</h4><p>Suivi opérationnel, subventions, mises en relation</p></div>
          </div>
          <p style={{ marginTop: 22, fontSize: 13 }}>
            <strong>Équipements financés :</strong> séchoirs · broyeurs · presses à granulés ·
            chaudières biomasse · manutention &amp; stockage
          </p>
          <div className="band-img" style={{ backgroundImage: "linear-gradient(rgba(246, 243, 236, 0.35), rgba(246, 243, 236, 0.35)), url('https://cdn.jsdelivr.net/gh/olivierpellegrin-ops/sylvagreen-capital@main/granul%C3%A9s_flux_droite_gauche.jpg')" }}></div>
        </div>
      </section>

      <ContactBand
        kicker="Contact investisseurs"
        title="Parlons de votre investissement"
        text="Investisseur potentiel : première rencontre sans engagement pour comprendre la mécanique du fonds et les vintages ouverts."
        profil="investisseur"
      />
    </main>
  );
}
