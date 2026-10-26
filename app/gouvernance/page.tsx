import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "SylvaGreen Capital — Gouvernance, équipe et cadre réglementaire",
  description:
    "Le gérant Olivier Pellegrin, les experts Laurent Casset et Alain Cochet, le comité d'investissement, l'agrément AMF et les critères ESG du fonds SylvaGreen Capital.",
};

const CDN = "https://cdn.jsdelivr.net/gh/olivierpellegrin-ops/sylvagreen-capital@main";

export default function Gouvernance() {
  return (
    <main>
      <div className="hero hero-short" id="top">
        <div className="hero-bg"></div>
        <div className="wrap">
          <span className="kicker">Gouvernance · Équipe · Confiance</span>
          <h1>Une équipe d&apos;experts, une conviction industrielle</h1>
          <p className="lead">
            Issus de l&apos;industrie du bois, nous investissons uniquement dans des projets que
            nous comprenons techniquement. Du capital patient, doublé d&apos;un savoir-faire
            opérationnel, rare dans le capital-investissement.
          </p>
        </div>
      </div>

      <section id="gerant">
        <div className="wrap">
          <span className="kicker">Le gérant</span>
          <h2>Une gestion professionnelle, sous agrément</h2>
          <div className="twocol">
            <div className="member">
              <div className="member-head">
                <img src={`${CDN}/olivier%20pellegrin.jpeg`} alt="Olivier Pellegrin" width={72} height={72} />
                <div>
                  <h3>Olivier PELLEGRIN</h3>
                  <p className="role"><strong>Gérant de SylvaGreen Management</strong></p>
                </div>
              </div>
              <p className="bio">
                Conseil en financement durable spécialisé dans l&apos;industrie du bois, Olivier
                Pellegrin instruit chaque dossier, anime le comité d&apos;investissement et pilote
                la relation avec les souscripteurs comme avec les entreprises financées.
              </p>
            </div>
            <div className="card">
              <h3>SylvaGreen Management</h3>
              <p>
                Le fonds SylvaGreen Capital est un fonds professionnel géré par SylvaGreen
                Management, société de gestion en cours d&apos;agrément AMF. Les actifs sont
                conservés par une banque dépositaire et les flux transitent exclusivement par les
                comptes du fonds : une architecture conforme aux exigences réglementaires, pensée
                pour la protection des souscripteurs.
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>Effet de levier :</strong> quand le fonds investit en premier, les
                banques surmultiplient le montant mobilisable pour le projet — un levier limité à
                50 % et à 20 % du fonds par entreprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#eef0e8" }} id="experts">
        <div className="wrap">
          <span className="kicker">Les experts</span>
          <h2>60 ans d&apos;expertise, de la scierie au granulé</h2>
          <div className="gov-team">
            <div className="member">
              <div className="member-head">
                <img src={`${CDN}/laurent%20casset.jpeg`} alt="Laurent Casset" width={72} height={72} />
                <div>
                  <h3>Laurent CASSET</h3>
                  <p className="role"><strong>Co-fondateur</strong> — Expert outils industriels bois-énergie</p>
                </div>
              </div>
              <p className="say">« La solution à : nous avons les projets, pas les moyens. »</p>
              <p className="bio">
                30 ans dans la filière bois, en France comme à l&apos;international : conception de
                projets industriels de valorisation biomasse, dimensionnement technique, vente
                d&apos;équipements de cogénération et de production de granulés, accompagnement
                client jusqu&apos;à la mise en route, développement de partenariats fournisseurs.
              </p>
            </div>
            <div className="member">
              <div className="member-head">
                <img src={`${CDN}/alain%20cochet.jpeg`} alt="Alain Cochet" width={72} height={72} />
                <div>
                  <h3>Alain COCHET</h3>
                  <p className="role"><strong>Co-fondateur</strong> — Expert scieries &amp; usines de granulation</p>
                </div>
              </div>
              <p className="say">« Connexes mal valorisés, c&apos;est la marge qui part en fumée. »</p>
              <p className="bio">
                Plus de 30 ans d&apos;expertise en implantation d&apos;usines de granulation :
                conception d&apos;ateliers, séchage, presses à granulés, qualité et démarrage
                d&apos;unités de production au service des producteurs.
              </p>
            </div>
          </div>
          <div className="mech" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div className="card"><b>60 ans</b><span>d&apos;expertise cumulée, de la 1ère transformation au granulé</span></div>
            <div className="card"><b>50 projets</b><span>soutenus dans les scieries et les usines de granulation, en France et à l&apos;étranger</span></div>
            <div className="card"><b>100 M€</b><span>estimation du déficit de financement de la filière française</span></div>
          </div>
        </div>
      </section>

      <section id="comite">
        <div className="wrap">
          <span className="kicker">Décisions · Transparence</span>
          <h2>Un comité d&apos;investissement collégial</h2>
          <div className="twocol">
            <div className="card">
              <h3>Comment se prennent les décisions</h3>
              <p>
                Chaque projet est instruit par le gérant puis soumis au comité d&apos;investissement :
                le commandité, les deux experts filière et un représentant des souscripteurs. La
                décision est collégiale, à l&apos;unanimité pour les dossiers clés, avec un
                règlement intérieur, une gestion des conflits d&apos;intérêts et un suivi
                trimestriel des investissements en portefeuille.
              </p>
            </div>
            <div className="card">
              <h3>Nos critères ESG</h3>
              <ul className="checklist">
                <li>Bois issus de forêts certifiées PEFC / FSC</li>
                <li>Valorisation des connexes : moins de déchets, plus de valeur locale</li>
                <li>Ancrage territorial et emploi local en priorité</li>
                <li>Reporting régulier aux souscripteurs, indicateurs suivis (CO₂, valorisation des déchets)</li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: 26, fontSize: 14 }}>
            Vous êtes investisseur ? <Link href="/investisseurs">Découvrez la mécanique du fonds →</Link>{" "}
            Vous dirigez une scierie ou une usine de granulés ? <Link href="/beneficiaires">Découvrez nos financements →</Link>
          </p>
        </div>
      </section>

      <ContactBand
        kicker="Contact"
        title="Parlons de votre projet"
        text="Investisseur potentiel, propriétaire de forêts ou dirigeant de la filière : première rencontre sans engagement."
        profil="gouvernance"
      />
    </main>
  );
}
