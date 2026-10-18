export default function Home() {
  const LOGO = "https://cdn.jsdelivr.net/gh/olivierpellegrin-ops/sylvagreen-capital@main/SylvaGreen%20Capital%20-%20horizontal.png";

  return (
    <>
      <header>
        <div className="wrap nav">
          <a className="brand" href="#top" title="SylvaGreen Capital">
            <img className="brand-logo" src={LOGO} alt="SylvaGreen Capital" height={44} />
          </a>
          <nav className="nav-links">
            <a href="#fonds">Le fonds</a>
            <a href="#solutions">Solutions</a>
            <a href="#processus">Processus</a>
            <a href="#equipe">Équipe</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <div className="hero" id="top">
        <div className="hero-bg"></div>
        <div className="wrap">
          <span className="kicker">Fonds professionnel « vert » · Filière bois française · 2026</span>
          <h1>Le capital-investissement au service de la filière bois française</h1>
          <p className="lead">
            Investir dans la première transformation du bois pour sécuriser la production de
            granulés : scieries, connexes, granulation, biomasse.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact">Parlons de votre projet</a>
            <a className="btn btn-ghost" href="#fonds">Découvrir le fonds</a>
          </div>
          <div className="hero-figs">
            <div className="fig"><b>500 k€/an</b><span>de souscriptions investisseurs, 10 ans de déploiement</span></div>
            <div className="fig"><b>6,7 M€</b><span>investis pendant 10 ans en produits financiers</span></div>
            <div className="fig"><b>12 %</b><span>de rendement brut annuel minimum visé</span></div>
          </div>
        </div>
      </div>

      <section id="fonds">
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
            granuleurs cherchent une ressource locale sécurisée. <strong>Notre objectif :</strong>{" "}
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
        </div>
      </section>

      <section style={{ background: "#eef0e8", paddingTop: 56 }}>
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
                Entrée minoritaire ou majoritaire au capital des scieries, granuleurs et
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
            <div className="list-card">
              <h3>Pour les dirigeants de la filière</h3>
              <ul>
                <li>Un interlocuteur qui parle « séchage, déligneuse, presse à granulés », pas seulement « retour sur capital »</li>
                <li>Des montages qui respectent l&apos;indépendance et l&apos;ancrage familial</li>
                <li>Accès à notre connaissance des aides et subventions (bois-énergie, chaleur, transition)</li>
                <li>Effet de levier bancaire : l&apos;assise du fonds sécurise les cofinancements des partenaires</li>
                <li>Traitement fiscal favorable : loyers et intérêts déductibles du résultat imposable</li>
              </ul>
            </div>
            <div className="list-card">
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

      <section id="processus" style={{ background: "#eef0e8" }}>
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
        </div>
      </section>

      <section id="equipe">
        <div className="wrap">
          <span className="kicker">L&apos;équipe · Gouvernance</span>
          <h2>Une équipe d&apos;experts, une conviction industrielle</h2>
          <div className="team">
            <div className="member">
              <img src="https://cdn.jsdelivr.net/gh/olivierpellegrin-ops/sylvagreen-capital@main/olivier%20pellegrin.jpeg" alt="Olivier Pellegrin" width={88} height={88} />
              <h3>Olivier PELLEGRIN</h3>
              <p className="role"><strong>Co-fondateur — Gérant</strong></p>
              <p className="say">
                « Du capital patient, doublé d&apos;un savoir-faire opérationnel rare dans le
                capital-investissement. »
              </p>
            </div>
            <div className="member">
              <img src="https://cdn.jsdelivr.net/gh/olivierpellegrin-ops/sylvagreen-capital@main/laurent%20casset.jpeg" alt="Laurent Casset" width={88} height={88} />
              <h3>Laurent CASSET</h3>
              <p className="role"><strong>Co-fondateur — Expert outils industriels bois-énergie</strong></p>
              <p className="say">« La solution à : nous avons les projets, pas les moyens. »</p>
              <p className="bio">
                30 ans dans la filière bois, en France comme à l&apos;international : conception de
                projets industriels de valorisation biomasse, dimensionnement technique, vente
                d&apos;équipements de cogénération et de production de granulés, accompagnement
                client jusqu&apos;à la mise en route, développement de partenariats fournisseurs.
              </p>
            </div>
            <div className="member">
              <img src="https://cdn.jsdelivr.net/gh/olivierpellegrin-ops/sylvagreen-capital@main/alain%20cochet.jpeg" alt="Alain Cochet" width={88} height={88} />
              <h3>Alain COCHET</h3>
              <p className="role"><strong>Co-fondateur — Expert scieries &amp; usines de granulation</strong></p>
              <p className="say">« Connexes mal valorisés, c&apos;est la marge qui part en fumée. »</p>
              <p className="bio">
                Plus de 30 ans d&apos;expertise en implantation d&apos;usines de granulation :
                conception d&apos;ateliers, séchage, presses à granulés, qualité et démarrage
                d&apos;unités de production au service des producteurs.
              </p>
            </div>
          </div>
          <div className="expertise">
            <div className="card"><b>60 ans</b><p>d&apos;expertise cumulée, de la 1ère transformation au granulé</p></div>
            <div className="card"><b>50 projets soutenus</b><p>dans les scieries et les usines de granulation, en France et à l&apos;étranger</p></div>
            <div className="card"><b>100 M€</b><p>estimation du déficit de financement de la filière française</p></div>
          </div>
          <div className="card" style={{ marginTop: 22 }}>
            <h3>Notre promesse</h3>
            <p>
              Issus de l&apos;industrie du bois, nous investissons uniquement dans des projets que
              nous comprenons techniquement : modernisation de scieries, valorisation des connexes,
              usines de granulation, chaudières biomasse. Du capital patient, doublé d&apos;un
              savoir-faire opérationnel, rare dans le capital-investissement.
            </p>
          </div>
          <div className="card" style={{ marginTop: 22 }}>
            <h3>Gouvernance</h3>
            <p>
              Le fonds sera un fonds professionnel géré par SylvaGreen Management (société de
              gestion en cours d&apos;agrément AMF), sous la responsabilité d&apos;Olivier
              PELLEGRIN. Actifs conservés par une banque dépositaire. Les flux d&apos;investisseurs
              transitent exclusivement par les comptes du fonds : une architecture conforme aux
              exigences réglementaires, pensée pour la protection des souscripteurs.
            </p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <span className="kicker">Contact</span>
          <h2>Parlons de votre projet</h2>
          <div className="contact-grid">
            <div>
              <p>
                Investisseur potentiel, propriétaire de forêts ou dirigeant de la filière :
                première rencontre sans engagement.
              </p>
              <div style={{ marginTop: 26 }}>
                <a className="btn btn-primary" href="mailto:olivier.pellegrin@sylvagreen.fr">
                  Prendre rendez-vous
                </a>
              </div>
            </div>
            <div className="contact-info">
              <div><b>Téléphone</b><a href="tel:+33617793908">06 17 79 39 08</a></div>
              <div><b>E-mail</b><a href="mailto:olivier.pellegrin@sylvagreen.fr">olivier.pellegrin@sylvagreen.fr</a></div>
              <div><b>Site</b><span>www.sylvagreen-capital.fr</span></div>
              <div><b>Gérant</b><span>Olivier PELLEGRIN — SylvaGreen Management</span></div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <img className="footer-logo" src={LOGO} alt="SylvaGreen Capital" height={40} />
          <p style={{ marginTop: 12 }}>
            <strong>SYLVAGREEN CAPITAL</strong> — Simulation 2027-2036, modèle 30 % capital – 70 %
            cession-location — document non contractuel.
          </p>
          <div className="disclaimer">
            Document de communication à destination d&apos;investisseurs qualifiés. Ne constitue
            ni une offre de souscription, ni un conseil en investissement. Chiffres de filière :
            sources professionnelles (2025). Chiffres du fonds : simulation interne sur 10 ans avec
            cession-location, non contractuelle. Les performances passées ou simulées ne préjugent
            pas des performances futures. — Document non contractuel — SylvaGreen Capital — 2026.
            Reproduction interdite.
          </div>
        </div>
      </footer>
    </>
  );
}
